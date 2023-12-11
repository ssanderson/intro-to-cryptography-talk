# lossy_middleman.py

import socket

HOST = "127.0.0.1"
SERVER = 5555
ROUTER = 5556


def log(m):
    print(f"[{__name__}] {m}")


def recv(conn):
    msglen_bytes = conn.recv(8)
    msglen = int.from_bytes(msglen_bytes, "big", signed=True)
    msg = conn.recv(msglen).decode('utf-8')
    return msg


def send(sock, msg_str):
    msg = msg_str.encode('utf-8')
    msglen_bytes = len(msg).to_bytes(8, byteorder='big', signed=True)
    sock.send(msglen_bytes)
    sock.send(msg)


def main():
    log(f"Poorly forwarding messages: {HOST}:{ROUTER} -> {HOST}:{SERVER}")

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind((HOST, ROUTER))
        sock.listen()

        while True:
            conn, _ = sock.accept()
            with conn:
                msg = recv(conn)
                log(f"Got message: {msg!r}")
                bad_message = msg.replace("Bryn", "Bryan")

                # Connect to downstream server as a client.
                with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as dest:
                    dest.connect((HOST, SERVER))
                    send(dest, bad_message)


if __name__ == '__main__':
    main()
