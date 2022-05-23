import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Head>
        <title>Hikegram</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default Home;
