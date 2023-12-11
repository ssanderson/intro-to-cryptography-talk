# basic_client.py

import sys

from .utils import connect_to_server, log, send_message


def main(port):
    with connect_to_server(port) as socket:
        message = b"Hello from Bryn!"
        log(f"Sending message: {message!r}")
        send_message(socket, message)


if __name__ == '__main__':
    main(int(sys.argv[1]))
