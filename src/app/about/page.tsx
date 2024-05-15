"use client";
import NavBar from "../../components/NavBar";
import React, { useState } from "react";

const AboutPage = () => {
  const [currentPage] = useState("About");
  return (
    <div>
      <NavBar currentPage={currentPage} />
    </div>
  );
};

export default AboutPage;
