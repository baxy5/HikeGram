import React from "react";
import { useEffect } from "react";
import Image from "next/image";

import styles from "../../styles/Content.module.scss";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Explore = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div>
      <motion.div
        initial="hidden"
        animate={control}
        ref={ref}
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
        <div className={styles.wrapper}>
          <Image
            src="/friends.jpg"
            width={1920}
            height={1331}
            className={styles.image}
          />
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
      </motion.div>
    </div>
  );
};

export default Explore;
