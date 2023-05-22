import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import dateFormat from "dateformat";
import PodcastPreview from "../../Components/PodcastPreview";
import { Tooltip } from "@nextui-org/react";
import db from "../../firebase";
import { getDocs, collection } from "firebase/firestore/lite";
import SuggestionCard from "../../Components/SuggestionCard";
import topnews from "./topnews";

export default function Home() {
  const now = new Date();
  const [email, setEmail] = useState({
    emailID: "",
    date: dateFormat(now, "mediumDate"),
    time: dateFormat("shortTime"),
  });

  const [topnewsData, setTopnewsData] = useState([]);

  const [wildlifeData, setWildlifeData] = useState([]);

  const submitBtnHandler = () => {};

  const emailChangeHadler = () => {};

  useEffect(() => {
    const getTopNews = () => {
      const dataArr = [];

      try {
        const querySnapshot = getDocs(collection(db, "topnews"));

        querySnapshot.forEach((doc) => {
          dataArr.push(doc.data());
          // console.log('👈👉', doc.data());
        });
      } catch (error) {
        console.error("Error retrieving data from Firestore: ", error);
      }

      const latestData = dataArr
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

      setTopnewsData(latestData);
    };

    const getWildlifeNews = () => {
      const dataArr = [];

      try {
        const querySnapshot = getDocs(collection(db, "wildlife"));

        querySnapshot.forEach((doc) => {
          dataArr.push(doc.data());
        });
      } catch (error) {
        console.error("Error retrieving data from Firestore: ", error);
      }

      setWildlifeData(dataArr);
    };

    getTopNews();
  }, []);

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
          <div className={styles.Topnews_Preview}>
            <Tooltip content="more top news!?">
              <Link href={`/${"topnews"}`}>
                <h3 className={styles.Head}>{"TOP NEWS ⬇"}</h3>
              </Link>
            </Tooltip>

            <div className={styles.Articles}>
              {console.log(topnewsData)}
              <SuggestionCard
              // src={topnewsData[0].imgSrc}
              // alt={topnewsData[0].imgAlt}
              // title={topnewsData[0].title}
              // tag1={topnewsData[0].tags[0]}
              />
            </div>
          </div>
          <div className={styles.Wildlife_Preview}></div>
        </section>

        <PodcastPreview />
      </main>
    </>
  );
}
