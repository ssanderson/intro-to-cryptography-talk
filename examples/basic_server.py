# basic_server.py

import socket

HOST = "127.0.0.1"
PORT = 5555


def log(m):
    print(f"[{__file__}] {m}")


def recv(conn):
    msglen_bytes = conn.recv(8)
    msglen = int.from_bytes(msglen_bytes, "big", signed=True)
    msg = conn.recv(msglen).decode('utf-8')
    return msg


def main():
    log(f"Listening for messages on {HOST}:{PORT}")

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind((HOST, PORT))
        sock.listen()

        while True:
            conn, _ = sock.accept()
            with conn:
                msg = recv(conn)
                log(f"Got message: {msg!r}")


if __name__ == '__main__':
    main()
