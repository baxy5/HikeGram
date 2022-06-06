import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h1>
          Hike<span>gram</span>
        </h1>
        <p>
          Hikegram is a photo sharing website for wild hikers all around the
          world. Share your photos. Find friends. Hike together.
        </p>
      </div>
    </div>
  );
};

export default Hero;
