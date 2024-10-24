import React from "react";
import styles from "./TotalScore.module.css";

export const TotalScore = ({score}) => {
  return (
    <div className={styles.score_card}>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
};
