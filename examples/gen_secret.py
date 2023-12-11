import secrets


def main():
    print(secrets.token_bytes(16).hex())


if __name__ == '__main__':
    main()
