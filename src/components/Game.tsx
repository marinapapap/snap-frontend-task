import React, { useState, useEffect } from "react";
import DrawCardButton from "./DrawCardButton";
import Deck from "./Deck";
import styles from "../styles/Game.module.css";

const Game: React.FC = () => {
  const [deck, setDeck] = useState<string>("");
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
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
        setRemaining(data.remaining);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchDeck();
  }, []);

  return (
    <div className={styles.game}>
      <Deck deck={deck} remaining={remaining} />
      <DrawCardButton />
    </div>
  );
};

export default Game;
