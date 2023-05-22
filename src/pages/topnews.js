import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Topnews.module.css";
import NewsCard from "../../Components/NewsCard";
import Link from "next/link";
import db from "../../firebase";
import { getDocs, collection } from "firebase/firestore/lite";
import dateFormat from "dateformat";
import { generate_slug } from "../utility/generate_slug";

const topnews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArr = [];

    const getTopNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topnews"));

        querySnapshot.forEach((doc) => {
          dataArr.push(doc.data());
        });
      } catch (error) {
        console.error("Error retrieving data from Firestore: ", error);
      }

      setData(dataArr);
    };

    getTopNews();
  }, []);

  return (
    <>
      <Head>
        <title>Top News - Verde News</title>
      </Head>

      <div className={styles.Main}>
        <div className={styles.Wrapper}>
          <h3 className={styles.Heading}>TOP NEWS</h3>

          <div className={styles.Container}>
            {data.map((article) => {
              return (
                <>
                  <Link href={`/topnews/${generate_slug(article.title)}`}>
                    <NewsCard
                      title={article.title}
                      src={article.imgSrc}
                      alt={article.imgAlt}
                      tag1={article.tags[0]}
                      tag2={article.tags[1]}
                      tag3={article.tags[2]}
                      author_date={`${article.authorName} : ${dateFormat(
                        article.date,
                        "mediumDate"
                      )}`}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default topnews;
