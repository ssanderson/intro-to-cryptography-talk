# malicious_router.py

from .hash_client import send_hashed_message
from .hash_server import read_hashed_message
from .utils import (
    connect_to_server,
    log,
    run_server_on_port,
)

SERVER_PORT = 5555
ROUTER_PORT = 5556


def main():
    log(f"Forwarding messages: {ROUTER_PORT} -> {SERVER_PORT}")

    def server(conn):
        (hash_, message) = read_hashed_message(conn)
        log(f"Got message: {message!r}")

        corrupted_message = message.replace(b"Bryn", b"Bryan")

        with connect_to_server(SERVER_PORT) as sock:
            log(f"Sending corrupted message: {corrupted_message!r}")
            send_hashed_message(sock, corrupted_message)

    run_server_on_port(server, ROUTER_PORT)


if __name__ == '__main__':
    main()
