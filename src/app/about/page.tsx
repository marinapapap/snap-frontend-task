"use client";
import NavBar from "../../components/NavBar";
import React, { useState } from "react";
import styles from "../page.module.css";

const AboutPage = () => {
  const [currentPage] = useState("About");
  return (
    <div>
      <NavBar currentPage={currentPage} />
      <h2 className={styles.about}>
        Ever been so eager to play snap that you couldn't possible wait long
        enough to find an opponent? Then this is the app you've been waiting
        for.
        <br />
        As you draw cards from a deck, the matches you accumalate will be
        calculated and displayed once all 52 cards have been drawn.
        <br />
        Try to beat your own record!
      </h2>
    </div>
  );
};

export default AboutPage;
