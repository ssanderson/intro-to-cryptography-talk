from contextlib import contextmanager
import inspect
import socket


def log(m):
    caller = inspect.stack()[1].filename.split('/')[-1]
    print(f"[{caller}] {m}")


def read_message(conn):
    msglen_bytes = conn.recv(8)
    message_length = int.from_bytes(msglen_bytes, "big", signed=True)
    message = conn.recv(message_length).decode('utf-8')
    return message


def send_message(sock, msg_str):
    msg = msg_str.encode('utf-8')
    msglen_bytes = len(msg).to_bytes(8, byteorder='big', signed=True)
    sock.send(msglen_bytes)
    sock.send(msg)


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
