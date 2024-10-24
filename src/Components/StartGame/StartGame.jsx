import React from "react";
import styles from "./StartGame.module.css";

function StartGame({toggle}) {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.images_container}></div>
        <div className={styles.display_part}>
          <h1 className={styles.content}>DICE GAME</h1>
          <button
          onClick={toggle}
          className={styles.button}>Play now</button>
        </div>
      </div>
    </>
  );
}

export default StartGame;
