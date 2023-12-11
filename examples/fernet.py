from cryptography.fernet import Fernet

key = Fernet.generate_key()
f = Fernet(key)

ciphertext = f.encrypt(b'super secret data')
print(f"Ciphertext:\n  {ciphertext.hex()}")

plaintext = f.decrypt(ciphertext)
print(f"Plaintext:\n  {plaintext.decode('utf-8')}")
