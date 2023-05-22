import React from "react";
import styles from "./SuggestionCard.module.css";
import Image from "next/image";

const SuggestionCard = (props) => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.imgPreview}
        src={props.src}
        alt={props.alt}
        width={318}
        priority={true}
        height={212}
      />

      <span className={styles.date}>{props.author_date}</span>

      <h3 className={styles.title}>{props.title}</h3>

      <div className={styles.tags}>
        <span>{props.tag1}</span>
        <span>{props.tag2}</span>
        {props.tag3 ? <span>{props.tag3}</span> : <></>}
      </div>
    </div>
  );
};

export default SuggestionCard;
