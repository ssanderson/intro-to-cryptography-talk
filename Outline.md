# What I Wish I Had Known Before Joining an Authentication Startup: A Conceptual Introduction to Cryptography

# Slides

## Storytime

- Who Am I?
  - Background in Math, started programming late in college.
  - Worked in Video Games at Demiurge in 2013
  - Worked at Quantopian 2014-2020
    - Online platform where people could write Python code to trade stocks
  - Joined Badge in 2020
    - Building a product for portable, privacy-preserving biometric authentication.
    - I don't design new crytographic protocols directly, but I do interact
      with a lot of cryptography.
      - API Design
      - Database Schema Design
      - Services that generate and consume various kinds of tokens.
      - Integrating with third party identity services.
        - OIDC
        - SAML

## Who Is This Talk For?

Me, circa 2020

Goal is to give you a conceptual orientation w/r/t the high-level concepts.

## Outline

- What can cryptography give us?
  - Data Verification (hash)
  - Data Authenticity (MAC, Digital Signature)
  - Data Protection (Encryption)

- How do we use cryptography?
  - Password Storage
  - Authentication Tokens
  - TLS Certificates

## Data Verification

- Allows us know that a piece of data is the same as it was at a different
  location or moment in time.

- Example Use-Cases:
  - Alice sends a message to Bob over a potentially lossy connection. They want
    to be able to detect if an error occurred during transmission.

  - Alice runs a server that Bob needs to access. She wants to store Bob's
    password in a way such that Alice doesn't know Bob's password, but she can
    verify it later if Bob provides the password again.

- Main tool for this is **Cryptographic Hashing**

  - HASH = HASH_FUNCTION(data)

- A cryptographic hash of a piece of data is a short "summary" of the data that
  is:

  - A deterministic function of the input. Given the same input, you'll get the
    same hash back every time.

  - Difficult to reverse. Knowing the value of the hash doesn't tell you
    anything about the value of the original data.

  - Low collisions. It is very difficult to find two pieces of data that have
    the same hash.

Example Using SHA-256 (hashlib)

## Data Authenticity

- Allows us to know that a piece of data is the same as it was at a different
  location or moment in time **as attested to by a specific party**.

- Example Use-Cases:

  - Alice sends a message to Bob over an insecure connection. They want to be
    able to detect if anyone tampers with the message.

- Two tools for this:

  - **Message Authentication Codes** (MACs).
  - **Digital Signatures**

- MACs are similar to hashes, but incorporate a secret key as well.

  - MAC = MAC_FUNCTION(data, secret)

- MACs can be built out of hash functions.
  - Example HMAC(hash, data, secret) = hash_func(secret + hash_func(secret + message))

Example Using HMAC-SHA256

- Digital Signatures use asymmetric public/private keys.

  - SIGNATURE = SIGN(private_key, data)
  - IS_VALID = VERIFY(public_key, SIGNATURE)

Example Using Ed25519

## Data Protection

- Allows us to transmit or store data in a way that no one except intended
  parties can read it.

- Example Use-Cases:

  - Alice writes an entry in her diary every day and stores it on her
    server. The diary contains personal data that she doesn't want anyone else
    to be able to read.

  - Alice sends a private message to Bob.

- Main tool for this is **encryption**.
  - Encrypting data allows us to store it in format that's unintelligible until
    it's decrypted.
  - Comes in two varieties: symmetric and asymmetric encryption.
  - Symmetric encryption uses the same key for both encryption and decryption.
  - Asymmetric encryption uses a public/private keypair.
    - Messages can be decrypted with the public key, decrypted with the private
      key.
  - Some public/private encryption schemes "directly" support asymmetric
    encryption. However, more common is that public/private schemes allow you
    to perform a "key exchange" operation that combines public and private keys
    in a way that allows two parties to compute the same symmetric key.

Example Using cryptography.Fernet
Example Using ECDHE

## Applications

## Password Storage

- Hashing + salt

Example Using argon2-cffi

## Authentication Tokens

Example Using JWTs

## TLS Certificates

- Walk through x509 Cert
- Hard problems are people.

## Resources

- https://cryptography.io/en/latest/
- https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/
- https://www.cloudflare.com/learning/ssl/what-is-encryption/
- https://en.wikipedia.org/wiki/Cryptographic_hash_function
- https://en.wikipedia.org/wiki/HMAC
- https://crypto.stackexchange.com/questions/5646/what-are-the-differences-between-a-digital-signature-a-mac-and-a-hash
- https://en.wikipedia.org/wiki/Integrated_Encryption_Scheme
- https://security.stackexchange.com/questions/226747/what-is-the-difference-between-a-certificate-and-a-private-key
