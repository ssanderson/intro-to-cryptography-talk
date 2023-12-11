import {PropsWithChildren} from 'react';

import { Slide } from "./Slide";

export const Slides = () => (
  <>
    <TitleSlide/>
    <WhoAmISlide/>
    <AudienceSlides/>
    <OutlineSlides/>
    <WhatIsCryptoSlides/>
    <HashingSlides/>
    <MacSlides/>
    <DigitalSignatureSlides/>
    <SymEncryptSlides/>
    <AssymEncryptSlides/>
    <Review/>
    <Questions/>
  </>
);

const TitleSlide = () => (
  <Slide>
    <h1>What I Wish I Had Known Before Joining an Authentication Startup</h1>
    <h2>A Conceptual Introduction to Cryptography</h2>
  </Slide>
);

const WhoAmISlide = () => (
  <Slide>
    <Title>Who Am I?</Title>
    <Slide>
      dfasa
    </Slide>
  </Slide>
);

const AudienceSlides = () => (
  <Slide>
    <Slide>
      <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        <Title>Who Is This Talk For?</Title>
        <div style={{width: "33%"}}>
          <img style={{marginBottom: 0, height: "800px"}} src="/src/assets/me-2019.jpg"/>
          <h4>Scott: August 2019</h4>
        </div>
        <div style={{width: "33%"}} className="fragment">
          <img style={{marginBottom: 0, height: "800px"}} src="/src/assets/me-haggard.jpg"/>
          <h4>Scott: January 2021</h4>
        </div>
      </div>
    </Slide>
  </Slide>
);

const Title = ({children}: PropsWithChildren<{}>) => (
  <h2 style={{ position: "fixed", top: 0, left: 0}}>
    {children}
  </h2>
);

const OutlineSlides = () => (
  <Slide>
    <Slide>
      <Title>Outline</Title>
      <div style={{textAlign: "left"}}>
        <h3>Fundamental Goals of Cryptogrpahy</h3>
        <dl style={{fontSize: "3rem"}}>
          <dt>Integrity</dt>
          <dd>Ensure that data has not changed.</dd>
          <dt>Authenticity</dt>
          <dd>Ensure that data originates from expected source.</dd>
          <dt>Confidentiality</dt>
          <dd>Prevent undesired data access.</dd>
        </dl>
        <h3 style={{marginTop: "3rem"}}>Real-World Applications</h3>
        <dl style={{fontSize: "3rem"}}>
          <ul>
            <li>JSON Web Tokens</li>
            <li>Secure Shell (SSH) Auth</li>
            <li>Passkeys</li>
            <li>Transport Layer Security (TLS, aka HTTPS)</li>
          </ul>
        </dl>
      </div>
    </Slide>
  </Slide>
);

const WhatIsCryptoSlides = () => (
  <Slide>
    <Title>What Is Cryptography?</Title>
    <Slide>
      <p style={{fontSize: "3.5rem"}}>
        Cryptography is the use of computational and mathematical techniques to enable <b>secure communication</b> under <b>adversarial conditions</b>.
      </p>
    </Slide>
    <Slide transition="none">
      <h2 style={{ left: "50%", transform: "translateX(-50%)", top: "20%", position: "fixed"}}>Secure Messaging</h2>
      <img src="/src/assets/Albert-Bryn-Basic.svg"/>
    </Slide>
    <Slide transition="none">
      <h2 style={{ left: "50%", transform: "translateX(-50%)", top: "20%", position: "fixed"}}>Secure Storage</h2>
      <img src="/src/assets/Albert-Future-Albert.svg"/>
    </Slide>
    <Slide transition="none">
      <img src="/src/assets/Albert-Bryn-Evelyn.svg"/>
    </Slide>
    <Slide transition="none">
      <img src="/src/assets/Albert-Bryn-Mallory.svg"/>
    </Slide>
    <Slide>
      <img style={{maxHeight: "950px"}} src="/src/assets/Characters.png"/>
    </Slide>
  </Slide>
);

const HashingSlides = () => (
  <Slide>
    <Title>Data Integrity: Cryptographic Hashing</Title>
    <Slide transition="none">
      <img src="/src/assets/Albert-Bryn-Basic.svg"/>
    </Slide>
    <Slide transition="none">
      <img src="/src/assets/Albert-Database.svg"/>
    </Slide>
    <Slide transition="none">
      <img src="/src/assets/Albert-Trashfire.svg"/>
    </Slide>
    <Slide>
      <h3>Demo: Basic Client and Server</h3>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>How do we ensure <b>data integrity</b> in the face of unreliable transit and storage media?</p>
        <p className="fragment">One simple answer is <b>cryptographic hashing</b>!</p>
      </div>
    </Slide>
    <Slide>
      <img src="/src/assets/basic-hash.svg"/>
    </Slide>
    <Slide>
      <img src="/src/assets/collision-resist.svg"/>
    </Slide>
    <Slide>
      <h3>Example: SHA256</h3>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>Cryptographic hashes cheaply compute a short <b>summary</b> of an input.</p>
        <p>Learning the hash of a value doesn't tell us anything about that value.</p>
        <p>Hashes protect us against <b>accidental</b> data corruption.</p>
        <p>Cryptographic hashes usually <b>do not</b> protect us from malicious tampering, because an adversary can simply modify the data and recompute the hash.</p>
        <p>Regular cryptographic hashes are <b>not secure</b> for password storage, because they can be brute-forced. Instead, we use <b>key stretching functions</b> which are designed specifically for password storage.</p>
      </div>
    </Slide>
  </Slide>
);

const MacSlides = () => (
  <Slide>
    <Title>Data Authentication: Message Authentication Codes</Title>
    <Slide>
      <blockquote style={{fontSize: "3rem"}}>
        <p>
          Cryptographic hashes usually <b>do not</b> protect us from malicious tampering, because an adversary can simply modify the data and recompute the hash.
        </p>
        <footer> - Sanderson, S. (2023 December 11) Boston Python Meetup</footer>
      </blockquote>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>
          Hashing uses only public data, so anything we can do with hashing, a malicious adversary can emulate.
        </p>
        <p className="fragment">
          To defeat a malicious adversary, we need to incorporate a <b>secret</b> value known only to us.
        </p>
        <p className="fragment">
          The simplest way to do this is to use a <b>Message Authentication Code</b>, or <b>MAC</b>.
        </p>
        <p className="fragment">
          There are many kinds of MACs. A common class is <b>Hash-Based Message Authentication Codes</b>. An HMAC "mixes in" a secret value to a cryptographic hash function, resulting in a hash that can't be computed by an adversary without knowing the key.
        </p>
      </div>
    </Slide>
    <Slide>
      Example: HMAC-SHA256
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>Message Authentication Codes (MACs) are similar to hashes, but require an additional <b>secret key</b>.</p>
        <p>Verifying a MAC guarantees that our data can't be tampered with by an attacker who doesn't know the MAC key.</p>
        <p>MACs are often built from cryptographic hashes.</p>
        <p>HMAC-{"{hashname}"} is a common "standard" MAC function built from {"{hashname}"}.</p>
      </div>
    </Slide>
  </Slide>
);

const DigitalSignatureSlides = () => (
  <Slide>
    <Title>Data Authentication: Digital Signatures</Title>
    <Slide transition="none">
      <img style={{maxHeight: "1000px"}} src="/src/assets/SSH-Server.svg"/>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
      </div>
    </Slide>
    <Slide transition="none">
      <img style={{maxHeight: "1000px"}} src="/src/assets/SSH-Keys.svg"/>
    </Slide>
    <Slide>
      <img style={{maxHeight: "1000px"}} src="/src/assets/privkey-auth.svg"/>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>Digital Signatures are similar to MACs, but they use an <b>asymmetric</b> keypair instead of a shared MAC key.</p>
        <p>Data can be <b>signed</b> with the public key</p>
        <p>Verifying a MAC guarantees that our data can't be tampered with by an attacker who doesn't know the MAC key.</p>
        <p>MACs are often built from cryptographic hashes.</p>
        <p>HMAC-{"{hashname}"} is a common "standard" MAC function built from {"{hashname}"}.</p>
      </div>
    </Slide>
  </Slide>
);

const SymEncryptSlides = () => (
  <Slide>
    <Title>Confidentiality: Symmetric Encryption</Title>
    <Slide transition="none">
      <img src="/src/assets/Albert-Bryn-Evelyn.svg"/>
    </Slide>
    <Slide>
      <img style={{maxHeight:"900px"}} src="/src/assets/sym-encrypt.svg"></img>
    </Slide>
    <Slide>
      <img style={{maxHeight:"900px"}} src="/src/assets/sym-decrypt.svg"></img>
    </Slide>
    <Slide>
      <h3>Example: cryptography and nacl</h3>
    </Slide>
  </Slide>
);

const AssymEncryptSlides = () => (
  <div></div>
);

const Review = () => (
  <Slide>
    <Title>Review</Title>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p><b>Hashing</b> guarantees <b>data integrity</b> against <b>accidental</b> modification. Does not help against active attacker.</p>
        <p className="fragment"><b>Message Authentication Codes</b> use a <b>shared secret</b> to guarantee data <b>integrity</b> and <b>authenticity</b>.</p>
        <p className="fragment"><b>Digital Signatures </b> use <b>asymmetric signing keys</b> to guarantee data <b>integrity</b> and <b>authenticity</b>.</p>
        <p className="fragment"><b>Symmetric Encryption</b> uses a <b>shared secret</b> to guarantee <b>confidentiality</b>.</p>
        <p className="fragment"><b>Asymmetric Encryption</b> uses <b>asymmetric keys</b> to derive a shared session secret.</p>
      </div>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <h3>Libraries</h3>
        <ul>
          <li>Standard Library
            <ul>
              <li><code>hashlib</code></li>
              <li><code>hmac</code></li>
            </ul>
          </li>
          <li>Third Party
            <ul>
              <li><code>nacl</code> - Easy to use. Somewhat idiosyncratic algorithms.</li>
              <li><code>cryptography</code> - Supports common standards. Harder to use outside of "recipes" layer.</li>
            </ul>
          </li>
        </ul>
      </div>
    </Slide>
  </Slide>
);

const Questions = () => (
  <Slide>
    <Slide>
      <h2>Questions?</h2>
    </Slide>
  </Slide>
);
