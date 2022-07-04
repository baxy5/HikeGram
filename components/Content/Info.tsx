import React from "react";
import Image from "next/image";
import { useEffect } from "react";

import styles from "../../styles/Content.module.scss";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Info = ({ title, desc, src, size }) => {
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
        <div className={styles.more_info}>
          <div className={styles.feature}>
            <div className={styles.info}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{desc}</p>
            </div>
            <Image layout="responsive" src={src} width={size.width} height={size.height} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
