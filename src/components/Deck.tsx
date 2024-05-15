import React from "react";
import NewDeck from "./NewDeck";
import styles from "../styles/Deck.module.css";

const Deck: React.FC = () => {
  return (
    <div className={styles.deck}>
      <div>
        <div className={styles.placeholder}>
          Previous
          <br /> Card
        </div>
      </div>
      <NewDeck />
    </div>
  );
};

export default Deck;
