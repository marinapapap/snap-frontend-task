import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import styles from "../styles/Game.module.css";

const Game: React.FC = () => {
  const [deck, setDeck] = useState<string>("");

  const fetchDeck = async () => {
    try {
      const res = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch image");
      }
      const data = await res.json();
      setDeck(data.deck_id);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <div className={styles.game}>
      <Deck deck={deck} fetchDeck={fetchDeck} />
    </div>
  );
};

export default Game;
