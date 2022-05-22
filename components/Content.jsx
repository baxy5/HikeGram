import styles from "../styles/Content.module.scss";
import FriendsImage from "../public/friends.jpg";
import Image from "next/image";

const Content = () => {
  return (
    <div className={styles.container}>
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
  );
};

export default Content;
