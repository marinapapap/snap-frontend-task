import React, { useState } from "react";
import NewCard from "./NewCard";
import LastCard from "./LastCard";
import SnapText from "./SnapText";
import DrawButton from "./DrawButton";
import styles from "../styles/Deck.module.css";

interface DeckProps {
  deck: string;
  fetchDeck: () => void;
}

const Deck: React.FC<DeckProps> = ({ deck, fetchDeck }) => {
  const [remaining, setRemaining] = useState<number>(52);
  const [value, setValue] = useState<string>("");
  const [suit, setSuit] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [lastValue, setLastValue] = useState<string>("");
  const [lastSuit, setLastSuit] = useState<string>("");
  const [lastImage, setLastImage] = useState<string>("");
  const [valueMatches, setValueMatches] = useState<number>(0);
  const [suitMatches, setSuitMatches] = useState<number>(0);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const res = await fetch(
        `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch image");
      }
      const data = await res.json();
      setRemaining(data.remaining);
      if (data.remaining === 0) {
        return;
      }
      setValue(data.cards[0].value);
      setSuit(data.cards[0].suit);
      setImage(data.cards[0].image);

      if (value && lastValue && value === lastValue) {
        setValueMatches((prev) => (prev += 1));
      }

      if (suit && lastSuit && suit === lastSuit) {
        setSuitMatches((prev) => (prev += 1));
      }

      setLastValue(value);
      setLastSuit(suit);
      setLastImage(image);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const resetDeck = async () => {
    fetchDeck();
    setRemaining(52);
    setValue("");
    setSuit("");
    setImage("");
    setLastValue("");
    setLastSuit("");
    setLastImage("");
    setValueMatches(0);
    setSuitMatches(0);
  };

  return (
    <div>
      <SnapText
        value={value}
        suit={suit}
        lastValue={lastValue}
        lastSuit={lastSuit}
      />
      <div className={styles.deck}>
        <LastCard
          lastValue={lastValue}
          lastSuit={lastSuit}
          lastImage={lastImage}
        />
        <NewCard value={value} suit={suit} image={image} />
      </div>
      <DrawButton
        remaining={remaining}
        valueMatches={valueMatches}
        suitMatches={suitMatches}
        handleSubmit={handleSubmit}
        resetDeck={resetDeck}
      />
    </div>
  );
};

export default Deck;
