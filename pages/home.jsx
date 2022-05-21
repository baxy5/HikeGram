import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

function home() {
  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
}

export default home;
