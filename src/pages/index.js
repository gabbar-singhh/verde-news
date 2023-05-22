import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import dateFormat from "dateformat";
import PodcastPreview from "../../Components/PodcastPreview";

export default function Home() {
  const now = new Date();
  const [email, setEmail] = useState({
    emailID: "",
    date: dateFormat(now, "mediumDate"),
    time: dateFormat("shortTime"),
  });
  const submitBtnHandler = () => {};

  const emailChangeHadler = () => {};

  return (
    <>
      <Head>
        <title>Verde News - Stories that matter most</title>
        <meta
          name="description"
          content="Verde News is your go-to source for the latest news on environment, wildlife, green nature, and technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* GOOGLE FONT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.Main}>
        <section className={styles.HeroSection}>
          <span className={styles.subHeading}>
            &#35; <span>ClimateChange</span>
          </span>

          <h1 className={styles.heading}>VERDE NEWS</h1>

          <p className={styles.description}>
            Verde News is your go-to source for the latest news on environment,
            wildlife, green nature, and technology. We bring you the{" "}
            <mark>stories that matter most</mark>, with a focus on
            sustainability and innovation. Stay informed and inspired with Verde
            News!
          </p>

          <form className={styles.mainCTA} onSubmit={submitBtnHandler}>
            <input
              type="email"
              value={email.emailID}
              onChange={emailChangeHadler}
              placeholder="Enter your email"
              name=""
              id="mainInputTextField"
              spellCheck="false"
            />
            <button type="submit">Get Started</button>
          </form>
        </section>

        <section className={styles.Previews}>
          <div className={styles.Topnews_Preview}></div>
          <div className={styles.Wildlife_Preview}></div>
        </section>

        <PodcastPreview/>
        
      </main>
    </>
  );
}
