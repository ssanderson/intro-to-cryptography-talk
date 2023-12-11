from contextlib import contextmanager
import hashlib
import inspect
import socket


class HashMismatch(Exception):
    pass


def log(m):
    caller = inspect.stack()[1].filename.split('/')[-1]
    print(f"[{caller}] {m}")


def read_message(conn):
    length_bytes = conn.recv(8)
    message_length = int.from_bytes(length_bytes, "big", signed=True)
    message = conn.recv(message_length)
    return message


def send_message(sock, message):
    length_bytes = len(message).to_bytes(8, byteorder='big', signed=True)
    sock.send(length_bytes)
    sock.send(message)


def send_hashed_message(sock, message):
    """Send a message prefixed with a SHA-256 hash.
    """
    hash_ = hashlib.sha256(message).digest()
    send_message(sock, hash_ + message)


@contextmanager
def connect_to_server(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.connect(("127.0.0.1", port))
        yield sock


def run_server_on_port(server, port):
    """Decorator that runs a request handler on a port.
    """
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", port))
        sock.listen()

        while True:
            conn, _ = sock.accept()
            server(conn)

    return server
