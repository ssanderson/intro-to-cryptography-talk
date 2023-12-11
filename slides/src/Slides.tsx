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
        <h3>Fundamental Goals</h3>
        <dl style={{fontSize: "3rem"}}>
          <dt>Integrity</dt>
          <dd>Ensure that data has not changed.</dd>
          <dt>Authentication</dt>
          <dd>Ensure that data originates from expected source.</dd>
          <dt>Confidentiality</dt>
          <dd>Prevent unauthorized data access.</dd>
        </dl>
        <h3 style={{marginTop: "3rem"}}>Real-World Applications</h3>
        <dl style={{fontSize: "3rem"}}>
          <ul>
            <li>JSON Web Tokens</li>
            <li>SSH Access Keys</li>
            <li>TLS Certificates</li>
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
</Slide>
);

const HashingSlides = () => (
  <Slide>
    <Title>Cryptographic Hashes</Title>
    <Slide>
      <h3>Example: SHA256</h3>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>Cryptographic hashes cheaply compute a short <b>summary</b> of an input.</p>
        <p>Learning the hash of a value doesn't tell us anything about that value.</p>
        <p>Sending or storing a hash with a value allows us to detect <b>accidental</b> data corruption.</p>
        <p>Cryptographic hashes usually <b>do not</b> protect us from malicious tampering, because an adversary can simply modify the data and recompute the hash.</p>
        <p>Regular cryptographic hashes are <b>not secure</b> for password storage, because they can be brute-forced. Instead, we use <b>key stretching functions</b> which are designed specifically for password storage.</p>
      </div>
    </Slide>
  </Slide>
);

const MacSlides = () => (
  <Slide>
    <Title>Message Authentication Codes</Title>
    <Slide>
      <blockquote>
        <p>
          Cryptographic usually <b>do not</b> protect us from malicious tampering, because an adversary can simply modify the data and recompute the hash.
        </p>
        <footer>Sanderson, S. (2023 December 11)</footer>
      </blockquote>
    </Slide>
    <Slide>
      <div style={{textAlign: "left", fontSize: "3rem"}}>
        <p>Message Authentication Codes (MACs) work similarly to hashes, but require an additional <b>secret key</b>.</p>
        <p>Verifying a MAC of our data that our data can't be tampered with by an attacker who doesn't know the MAC key.</p>
        <p>MACs are often built from cryptographic hashes.</p>
        <p>HMAC-{"{hashname}"} is a common "standard" MAC function built from {"{hashname}"}.</p>
      </div>
    </Slide>
  </Slide>
);
