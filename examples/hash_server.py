# hash_server.py
import hashlib

from .utils import run_server_on_port, log, read_message

PORT = 5555


class HashMismatch(Exception):
    pass


def read_hashed_message(conn):
    hashed_message = read_message(conn)

    # First 32 bytes is the hash from the client.
    sent_hash = hashed_message[:32]

    # Remainder is the actual message.
    message = hashed_message[32:]

    # Compute our own hash and check that it matches.
    hash_ = hashlib.sha256(message).digest()

    if hash_ == sent_hash:
        log(f"Hash matched: {hash_.hex()}")
        # All good!
        return message
    else:
        raise HashMismatch()


def main():
    log(f"Listening for messages on {PORT}")

    def server(conn):
        try:
            msg = read_hashed_message(conn)
            log(f"Got message: {msg!r}")
        except HashMismatch:
            print("Hashes did not match!")

    run_server_on_port(server, PORT)


if __name__ == '__main__':
    main()
