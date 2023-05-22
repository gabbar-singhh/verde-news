import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const submitBtnHandler = () => {};
  const emailChangeHadler = () => {};

  return (
    <footer className={styles.Footer}>
      <section className={styles.Footer_Top}>
        <div className={styles.LeftsideFoot}>
          <p className={styles.LogoTxt}>The Verde News.</p>
          <ul className={styles.list}>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Customer Care</li>
            <li>Articles</li>
            <li>VerdeNews®India</li>
          </ul>
        </div>

        <div className={styles.RightsideFoot}>
          <p>Get the freshest Verde News</p>
          <form className={styles.Email_CTA} onSubmit={submitBtnHandler}>
            <input
              value={email}
              onChange={emailChangeHadler}
              type="email"
              placeholder="Enter your email"
              name=""
              spellCheck="false"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <section className={styles.Footer_Bottom}>
        <p className={styles.copyright}>
          Contents of this site are © Copyright 2023 The Verde Independent and
          Western News&Info®, Inc. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
