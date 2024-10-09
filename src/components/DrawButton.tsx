import React from "react";
import styles from "../styles/Deck.module.css";

interface DrawButtonProps {
  remaining: number;
  valueMatches: number;
  suitMatches: number;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  resetDeck: () => void;
}

const DrawButton: React.FC<DrawButtonProps> = ({
  remaining,
  valueMatches,
  suitMatches,
  handleSubmit,
  resetDeck,
}) => {
  return (
    <div>
      {remaining === 0 ? (
        <div>
          <h1 data-testid="value-matches">VALUE MATCHES: {valueMatches}</h1>
          <h1 data-testid="suit-matches">SUIT MATCHES: {suitMatches}</h1>
          <button
            className={styles.draw}
            data-testid="draw-button"
            onClick={resetDeck}
          >
            Reset Deck
          </button>
        </div>
      ) : (
        <button
          className={styles.draw}
          data-testid="draw-button"
          onClick={handleSubmit}
        >
          Draw Card
        </button>
      )}
    </div>
  );
};

export default DrawButton;
