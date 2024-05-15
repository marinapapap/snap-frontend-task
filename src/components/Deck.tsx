import React from "react";
import NewCard from "./NewCard";
import styles from "../styles/Deck.module.css";

interface DeckProps {
  deck: string;
  remaining: number | null;
}

const Deck: React.FC<DeckProps> = ({ deck, remaining }) => {
  return (
    <div className={styles.deck}>
      <div>
        <div className={styles.placeholder}>
          Previous
          <br /> Card
        </div>
      </div>
      <NewCard />
    </div>
  );
};

export default Deck;
