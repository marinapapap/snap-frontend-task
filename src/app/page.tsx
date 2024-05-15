"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Game from "../components/Game";

const Home: React.FC = () => {
  const [currentPage] = useState("Home");

  return (
    <main>
      <NavBar currentPage={currentPage} />
      <Game />
    </main>
  );
};

export default Home;
