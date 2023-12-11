from cryptography.fernet import Fernet, MultiFernet

old = Fernet(Fernet.generate_key())
new = Fernet(Fernet.generate_key())

multi = MultiFernet([new, old])


old_ciphertext = old.encrypt(b'super secret data')
new_ciphertext = new.encrypt(b'super secret data')

# MultiFernet can decrypt data encrypted with either key it holds.
old_pt = multi.decrypt(old_ciphertext)
new_pt = multi.decrypt(new_ciphertext)

assert old_pt == new_pt

# Rotate decrypts a ciphertext and re-encrypts under the first key in the list.
rotated = multi.rotate(old_ciphertext)

rotated_pt = new.decrypt(rotated)

assert rotated_pt == new_pt == old_pt
