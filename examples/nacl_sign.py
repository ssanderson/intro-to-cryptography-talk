from nacl.signing import SigningKey, VerifyKey
from nacl.exceptions import BadSignatureError

# Generate a new random signing key
signing_key = SigningKey.generate()

# Sign a message with the signing key. The signing key is meant to be kept
# private.
message = b"Attack at Dawn"
signed = signing_key.sign(message)
print(f"message = {message!r}")
print(f"signed  = {signed!r}")

# The private key also allows you to acces to the public key. This can safely
# be published or shared.
public_key = VerifyKey(signing_key.verify_key.encode())

public_key.verify(signed)
print("Successfully verified")

try:
    public_key.verify(signed.replace(b"Dawn", b"Noon"))
except BadSignatureError:
    print("Successfully rejected invalid message")
