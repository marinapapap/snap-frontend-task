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
  //   const [valueMatches, setValueMatches] = useState<number>(0);
  //   const [suitMatches, setSuitMathes] = useState<number>(0);
  //   useEffect(() => {
  //     const matches = async () => {
  //       if (value && lastValue && lastValue === lastValue) {
  //         setValueMatches((prev) => prev + 1);
  //       }
  //     };

  //     matches();
  //   }, [value, lastValue]);

  //   console.log(valueMatches);

  return (
    <>
      {value && value === lastValue && (
        <div>
          <h1>SNAP VALUE!</h1>
        </div>
      )}

      {suit && suit === lastSuit && (
        <div>
          <h1>SNAP Suit!</h1>
        </div>
      )}
    </>
  );
};

export default SnapText;
