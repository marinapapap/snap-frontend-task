import React, { useState, useEffect } from "react";
import NewCard from "./NewCard";
import LastCard from "./LastCard";
import styles from "../styles/Deck.module.css";

interface DeckProps {
  deck: string;
  remaining: number | null;
}

const Deck: React.FC<DeckProps> = ({ deck, remaining }) => {
  const [value, setValue] = useState<string>("");
  const [suit, setSuit] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [lastValue, setLastValue] = useState<string>("");
  const [lastSuit, setLastSuit] = useState<string>("");
  const [lastImage, setLastImage] = useState<string>("");

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLastValue(value);
    setLastSuit(suit);
    setLastImage(image);

    try {
      const res = await fetch(
        `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch image");
      }
      const data = await res.json();
      setValue(data.cards[0].value);
      setSuit(data.cards[0].suit);
      setImage(data.cards[0].image);
      console.log(value);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <div>
      <div className={styles.deck}>
        <LastCard
          lastValue={lastValue}
          lastSuit={lastSuit}
          lastImage={lastImage}
        />
        <NewCard value={value} suit={suit} image={image} />
      </div>
      <button data-testid="draw-button" onClick={handleSubmit}>
        Draw Card
      </button>
    </div>
  );
};

export default Deck;
