# basic_server.py

from .utils import run_server_on_port, log, read_message

PORT = 5555


def main():
    log(f"Listening for messages on {PORT}")

    def server(conn):
        msg = read_message(conn)
        log(f"Got message: {msg!r}")

    run_server_on_port(server, PORT)


if __name__ == '__main__':
    main()
