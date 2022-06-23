import { motion } from "framer-motion";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1>
            Hike<span>gram</span>
          </h1>
          <p>
            Hikegram is a photo sharing website for wild hikers all around the
            world. Share your photos. Find friends. Hike together.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
