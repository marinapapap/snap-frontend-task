"use client";
import React from "react";

const DrawCardButton: React.FC = () => {
  return (
    <button
      data-testid="draw-button"
      onClick={() => {
        console.log("MADE IT");
      }}
    >
      Draw Card
    </button>
  );
};

export default DrawCardButton;
