import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";

interface SnapTextProps {
  value: string;
  suit: string;
  lastValue: string;
  lastSuit: string;
}

const SnapText: React.FC<SnapTextProps> = ({
  value,
  suit,
  lastValue,
  lastSuit,
}) => {
  return (
    <>
      {value && value === lastValue && (
        <div data-testid="snap-value">
          <h1>SNAP VALUE!</h1>
        </div>
      )}

      {suit && suit === lastSuit && (
        <div data-testid="snap-value">
          <h1>SNAP Suit!</h1>
        </div>
      )}
    </>
  );
};

export default SnapText;
