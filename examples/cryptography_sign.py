from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.exceptions import InvalidSignature

private_key = Ed25519PrivateKey.generate()

message = b"Attack at Dawn"
signature = private_key.sign(message)
print(f"message    = {message!r}")
print(f"signature  = {signature!r}")

public_key = private_key.public_key()
public_key.verify(signature, message)

try:
    public_key.verify(signature, message.replace(b"Dawn", b"Noon"))
except InvalidSignature:
    print("Successfully rejected invalid signature.")
