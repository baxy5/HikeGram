import React from "react";
import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

import styles from "../styles/Home.module.scss";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Hikegram</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Navbar isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
          <Hero />
        </div>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default Home;
