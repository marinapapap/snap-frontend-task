import React from "react";
import styles from "../styles/Deck.module.css";

interface DrawButtonProps {
  remaining: number;
  valueMatches: number;
  suitMatches: number;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DrawButton: React.FC<DrawButtonProps> = ({
  remaining,
  valueMatches,
  suitMatches,
  handleSubmit,
}) => {
  if (remaining === 0) {
    return (
      <div>
        <h1 data-testid="value-matches">VALUE MATCHES: {valueMatches}</h1>
        <h1 data-testid="suit-matches">SUIT MATCHES: {suitMatches}</h1>
      </div>
    );
  } else {
    return (
      <button
        className={styles.draw}
        data-testid="draw-button"
        onClick={handleSubmit}
      >
        Draw Card
      </button>
    );
  }
};

export default DrawButton;
