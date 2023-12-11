from nacl.utils import random
from nacl.secret import SecretBox

# NOTE: This is just for demonstration. You should never actually print secret
# keys like this.
key = random(SecretBox.KEY_SIZE)
print(f"key is f{key.hex()}")

# A SecretBox lets you encrypt and decrypt values.
box = SecretBox(key)

ciphertext = box.encrypt(b'super secret data')
print(f"ciphertext is f{ciphertext.hex()}")

plaintext = box.decrypt(ciphertext)
assert plaintext == b'super secret data'
