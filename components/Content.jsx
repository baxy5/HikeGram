import styles from "../styles/Content.module.scss";
import Image from "next/image";
import FriendsImage from "../public/friends.jpg";
import WildHiker1 from "../public/wild-hiker1.jpg";
import WildHiker2 from "../public/wild-hiker2.jpg";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={FriendsImage} className={styles.image} />

        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Explore together</h1>
            <p>Share your experiences with others.</p>
            <p>Find friends.</p>
            <p>Hike together.</p>
            <button>Explore</button>
          </div>
        </div>
      </div>

      <div className={styles.more_info}>
        <div className={styles.features}>
          <Image
            src={WildHiker1}
            className={styles.img}
            width="100%"
            height={50}
            objectFit="cover"
            layout="responsive"
            quality={100}
          />
          <div className={styles.feature}>
            <h1>Share your photo</h1>
            <p>Show others the beautiful place you were.</p>
            <button>Share</button>
          </div>
        </div>
        <div className={`${styles.features} ${styles.right}`}>
          <Image
            src={WildHiker2}
            className={styles.img}
            width="100%"
            height={50}
            objectFit="cover"
            layout="responsive"
            quality={100}
          />
          <div className={styles.feature}>
            <h1>Get to know others</h1>
            <p>
              Are you lone wolf and want to change that? Find friends, and go
              have some fun together.
            </p>
            <button>Find</button>
          </div>
        </div>
      </div>

      <div className={styles.under_cons}>
        <h1>UNDER CONSTRUCTION</h1>
      </div>
    </div>
  );
};

export default Content;
