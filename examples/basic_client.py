import socket
import sys

HOST = "127.0.0.1"

PORTS = {
    "server": 5555,
    "router": 5556,
}


def log(m):
    print(f"[{__name__}] {m}")


def send(sock, msg_str):
    msg = msg_str.encode('utf-8')
    msglen_bytes = len(msg).to_bytes(8, byteorder='big', signed=True)
    sock.send(msglen_bytes)
    sock.send(msg)


def main(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.connect((HOST, port))
        message = "Hello from Bryn".encode('utf-8')
        msglen = len(message).to_bytes(8, byteorder='big', signed=True)

        print(f"Sending message to {HOST}:{port}: {message!r}")

        sock.send(msglen)
        sock.send(message)


if __name__ == '__main__':
    main(PORTS[sys.argv[1]])
