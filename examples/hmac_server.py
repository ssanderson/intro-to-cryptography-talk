import sys
import hmac

from .utils import run_server_on_port, log, read_message, MacMismatch

PORT = 5555


def read_hmaced_message(conn, key):
    hmaced_message = read_message(conn)

    # First 32 bytes is the MAC from the client.
    sent_hmac = hmaced_message[:32]

    # Remainder is the actual message.
    message = hmaced_message[32:]

    # Compute our own hash and check that it matches.
    computed_hmac = hmac.new(key, message, digestmod='sha256').digest()

    if hmac.compare_digest(sent_hmac, computed_hmac):
        return sent_hmac, message
    else:
        raise MacMismatch()


def main(key):
    log(f"Listening for messages on {PORT}")

    def server(conn):
        try:
            (hash_, message) = read_hmaced_message(conn, key)
            log(f"Got message: {message!r}. HMAC-SHA256={hash_.hex()}")
        except MacMismatch:
            print("MACs did not match!")

    run_server_on_port(server, PORT)


if __name__ == '__main__':
    main(bytes.fromhex(sys.argv[1]))
