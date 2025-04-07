import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";


export const Header = () => {
  return (
    <header>
    <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </header>
  );
};

