import React from "react";
import styles from "../styles/loadingScreen.module.scss";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const loadingScreen = () => {
  return (
    <div className={styles.container}>
      <div>
        <ClimbingBoxLoader />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default loadingScreen;
