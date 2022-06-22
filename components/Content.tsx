import styles from "../styles/Content.module.scss";
import Image from "next/image";
import FriendsImage from "../public/friends.jpg";
import WildHiker3 from "../public/wild-hiker3.jpg";
import WildHiker2 from "../public/wild-hiker2.jpg";
import WildHiker1 from "../public/wild-hiker1.jpg";

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
        <div className={styles.feature}>
          <div className={styles.info}>
            <h1 className={styles.title}>Share your photo</h1>
            <p className={styles.desc}>
              Show others the beautiful place you were.
            </p>
          </div>
          <Image src={WildHiker3} placeholder="blur" />
        </div>
        <div className={styles.feature}>
          <Image src={WildHiker2} placeholder="blur" />
          <div className={styles.info}>
            <h1 className={styles.title}>Get to know others</h1>
            <p className={styles.desc}>
              Are you lone wolf and want to change that? Find friends, and go
              have some fun together.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.under_cons}>
        <h1>Join to this excellent community! </h1>
      </div>
    </div>
  );
};

export default Content;
