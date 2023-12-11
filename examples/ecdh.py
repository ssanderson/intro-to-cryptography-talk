from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.hkdf import HKDF


def print_key(name, k):
    # NOTE: This is just for demonstration. You should never actually print
    # private keys like this.
    private_value = k.private_numbers().private_value
    pub = k.public_key()
    public_nums = pub.public_numbers()
    print(f"{name}'s private key value is:\n  {private_value}")
    print(
        f"{name}'s public key is:\n"
        f"  x={public_nums.x}\n"
        f"  y={public_nums.y}"
    )
    print()


albert_private = ec.generate_private_key(ec.SECP256R1())
print_key("Albert", albert_private)

bryn_private = ec.generate_private_key(ec.SECP256R1())
print_key("Bryn", bryn_private)

# Simulate albert receiving Bryn's public key.
albert_shared_secret = albert_private.exchange(
    ec.ECDH(),
    bryn_private.public_key(),
)
print(f"Albert's shared secret is:\n  {list(albert_shared_secret)}")

# Simulate albert receiving Bryn's public key.
bryn_shared_secret = bryn_private.exchange(
    ec.ECDH(),
    albert_private.public_key(),
)
print(f"Bryn's shared secret is:\n  {list(bryn_shared_secret)}")


# In real applications it's bad practice to use the derived secret directly.
# Instead, we run through a KDF first.
albert_secret = derived_key = HKDF(
    algorithm=hashes.SHA256(),
    length=32,
    salt=None,
    info=b'handshake data',
).derive(albert_shared_secret)
print(f"Albert's derived secret is:\n  {list(albert_secret)}")

bryn_secret = derived_key = HKDF(
    algorithm=hashes.SHA256(),
    length=32,
    salt=None,
    info=b'handshake data',
).derive(bryn_shared_secret)
print(f"Bryn's derived secret is:\n  {list(bryn_secret)}")
