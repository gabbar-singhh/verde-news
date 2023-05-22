import React from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.LeftsideNav}>
        <div className={styles.Logo}>
          <Image
            src="/newspaper.svg"
            height={30}
            width={30}
            alt="newspaper-icon"
          />
          <span>Verde News</span>
        </div>

        <ul className={styles.NavItems}>
          <li className="highlightEffect">
            <Link href={"/"}>Home</Link>
          </li>

          <li className="highlightEffect">
            <Link href={"/topnews"}>top news</Link>
          </li>

          <li className="highlightEffect">
            <Link href={"/wildlife"}>wildlife</Link>
          </li>

          <li className="highlightEffect">
            <Link href={"/podcast"}>podcasts</Link>
          </li>
        </ul>
      </div>

      <div className={styles.RightsideNav}>
        <span className={styles.outlineBtn}>
          <Image
            alt="play-circle-icon"
            src="/playCircle.svg"
            height="25"
            width="25"
          />
          <span>How it works?</span>
        </span>

        <span className={styles.solidBtn}>Sign In</span>
      </div>
    </nav>
  );
};

export default Navigation;
