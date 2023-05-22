import React from "react";
import Head from "next/head";
import styles from "@/styles/podcast.module.css";
import PodcastPreview from "../../Components/PodcastPreview";

const podcast = () => {
  return (
    <>
      <Head>
        <title>How to Save a Planet - Our Podcast</title>
      </Head>

      <PodcastPreview />
      <section className={styles.Episodes}>
        <h4>Top Episodes ⬇</h4>

        <div className={styles.EpisodeContainer}>
          <iframe
            style={["borderRadius", "12px"]}
            src="https://open.spotify.com/embed/episode/50uusaWIsZZdO2LhjSUhON?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={["borderRadius", "12px"]}
            src="https://open.spotify.com/embed/episode/2N1n3XNUlcvkOLu03IW6yi?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={["borderRadius", "12px"]}
            src="https://open.spotify.com/embed/episode/62QDcMCxgTXgajfJ8GeUgE?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={["borderRadius", "12px"]}
            src="https://open.spotify.com/embed/episode/0FjVOHV3XO3UiAoIswsZAq?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={["borderRadius", "12px"]}
            src="https://open.spotify.com/embed/episode/4u9nhrXCGnrQwE1s6Zuzy6?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default podcast;
