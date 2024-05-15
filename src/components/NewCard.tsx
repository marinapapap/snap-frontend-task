import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";

const NewCard: React.FC = () => {
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
