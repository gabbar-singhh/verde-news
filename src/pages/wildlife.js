import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
// here, using same CSS file as topnews.js
import styles from "../styles/Topnews.module.css";
import dateFormat from "dateformat";
import { getDocs, collection } from "firebase/firestore/lite";
import db from "../../firebase";
import { generate_slug } from "@/utility/generate_slug";
import NewsCard from "../../Components/NewsCard";

const wildlife = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArr = [];
    const getWildlifeNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "wildlife"));

        querySnapshot.forEach((doc) => {
          dataArr.push(doc.data());
        });
      } catch (error) {
        console.error("Error retrieving data from Firestore: ", error);
      }
      setData(dataArr);
    };

    getWildlifeNews();
  }, []);

  return (
    <>
      <Head>
        <title>Wildlife News - Verde News</title>
      </Head>

      <div className={styles.Main}>
        <div className={styles.Wrapper}>
          <h3 className={styles.Heading}>Wildlife</h3>

          <div className={styles.Container}>
            {data.map((article) => {
              return (
                <Link
                  key={generate_slug(article.title)}
                  href={`/wildlife/${generate_slug(article.title)}`}
                  className={styles.card}
                >
                  <NewsCard
                    className={styles.element}
                    src={article.imgSrc}
                    alt={article.imgAlt}
                    author_date={`${article.authorName} : ${dateFormat(
                      article.date,
                      "mediumDate"
                    )}`}
                    title={article.title}
                    tag1={article.tags[0]}
                    tag2={article.tags[1]}
                    tag3={article.tags[2]}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default wildlife;
