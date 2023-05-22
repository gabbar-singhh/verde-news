import React from "react";
import styles from './PodcastPreview.module.css'
import Image from "next/image";
import Link from "next/link";

const PodcastPreview = () => {
  return (
    <section className={styles.PodcastSection}>
      <div className={styles.LeftSide}>
        <Image
          src="https://gimlet.spotifycdn.com/show_art/912871b2-e86f-4548-b527-435e2397fe83/fallback.jpg"
          alt="logo"
          height={350}
          width={350}
        />
      </div>
      <div className={styles.RightSide}>
        <h3 className={styles.head}>How to Save a Planet</h3>
        <div className={styles.subhead}>
          Join journalist Alex Blumberg and climate nerds for inspiring stories
          about climate change that leave you energized and hopeful. Smart
          solutions for a brighter future.
        </div>
        <div className={styles.SpotifyCard}>
          <Link href="https://open.spotify.com/show/1KzrasExlM5dgMYwgFHns6?si=e407effb3d1c4269">
            <Image
              className={styles.Img}
              src="/spotify-card.png"
              width={220}
              height={85}
              alt="spotify-clone"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PodcastPreview;
