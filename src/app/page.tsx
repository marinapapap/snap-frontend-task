"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  const [currentPage] = useState("Home");

  return (
    <main>
      <NavBar currentPage={currentPage} />
    </main>
  );
};

export default Home;
