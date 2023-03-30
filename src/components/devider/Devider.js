import React from "react";
import styles from "./devider.module.css";

export default function Devider() {
  return (
    <div className={styles.container}>
      <div className={styles.devider} />
      <div className={styles.devider2} />
    </div>
  );
}
