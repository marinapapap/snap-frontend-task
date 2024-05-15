import React from "react";
import styles from "../styles/Deck.module.css";

const Deck: React.FC = () => {
  return (
    <div>
      <div className={styles.placeholder}>
        New
        <br /> Card
      </div>
    </div>
  );
};

export default Deck;
