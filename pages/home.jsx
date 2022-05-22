import React from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Content from "../components/Content.jsx";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className={styles.wrapper}>
        <Content />
      </div>
    </>
  );
}

export default Home;
