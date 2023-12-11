# buggy_router.py

from .utils import (
    connect_to_server,
    log,
    read_message,
    run_server_on_port,
    send_message,
)

SERVER_PORT = 5555
ROUTER_PORT = 5556


def main():
    log(f"Forwarding messages: {ROUTER_PORT} -> {SERVER_PORT}")

    def server(conn):
        message = read_message(conn)
        log(f"Got message: {message!r}")

        # Simulate "data corruption".
        log("Fixing typos in message!")
        corrupted_message = message.replace(b"Bryn", b"Bryan")

        with connect_to_server(SERVER_PORT) as sock:
            log(f"Sending message: {corrupted_message!r}")
            send_message(sock, corrupted_message)

    run_server_on_port(server, ROUTER_PORT)


if __name__ == '__main__':
    main()
