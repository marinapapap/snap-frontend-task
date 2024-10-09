import React from "react";

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
        <div data-testid="snap-suit">
          <h1>SNAP SUIT!</h1>
        </div>
      )}
    </>
  );
};

export default SnapText;
