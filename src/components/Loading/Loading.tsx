import React from "react";
import styles from "./style.module.css";

const Loading = () => {
  return (
    <div className={styles.container} data-testid="loading">
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
