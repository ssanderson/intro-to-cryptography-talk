# hmac_client.py
import hmac
import sys

from .utils import connect_to_server, log, send_message


def send_hmaced_message(sock, key, message):
    """Send a message prefixed with a SHA-256 hash.
    """
    # Compute HMAC using SHA-256 as underlying hash.
    mac = hmac.new(key, message, digestmod='sha256')
    send_message(sock, mac + message)


def main(port, mac_key):
    with connect_to_server(port) as sock:
        message = b"Hello from Bryn"
        log(f"Sending message: {message!r}")
        send_hmaced_message(sock, message)


if __name__ == '__main__':
    main(int(sys.argv[1]), bytes.fromhex(sys.argv[2]))
