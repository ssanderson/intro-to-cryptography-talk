# hash_client.py

import hashlib
import sys

from .utils import connect_to_server, log, send_message


def send_hashed_message(sock, message):
    """Send a message prefixed with a SHA-256 hash.
    """
    hash_ = hashlib.sha256(message).digest()
    send_message(sock, hash_ + message)


def main(port):
    with connect_to_server(port) as sock:
        message = b"Hello from Bryn"
        log(f"Sending message: {message!r}")
        send_hashed_message(sock, message)


if __name__ == '__main__':
    main(int(sys.argv[1]))
