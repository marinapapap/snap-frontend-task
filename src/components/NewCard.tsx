import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";

interface NewCardProps {
  value: string;
  suit: string;
  image: string;
}

const NewCard: React.FC<NewCardProps> = ({ image }) => {
  if (image) {
    return (
      <div>
        <img src={image}></img>
      </div>
    );
  } else
    return (
      <div>
        <div className={styles.placeholder}>
          New
          <br /> Card
        </div>
      </div>
    );
};

export default NewCard;
