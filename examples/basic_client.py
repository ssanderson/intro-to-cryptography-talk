import sys

from .utils import connect_to_server, log, send_message


def main(port):
    with connect_to_server(port) as sock:
        message = "Hello from Bryn"
        log(f"Sending message: {message!r}")
        send_message(sock, message)


if __name__ == '__main__':
    main(int(sys.argv[1]))
