import React from "react";
import DrawCardButton from "./DrawCardButton";
import Deck from "./Deck";
import styles from "../styles/Game.module.css";

const Game: React.FC = () => {
  return (
    <div className={styles.game}>
      <Deck />
      <DrawCardButton />
    </div>
  );
};

export default Game;
