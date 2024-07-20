import Menu from "./Components/menu";
import Contact from "./Components/contact";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/landing";

const buttonNames = ["Coding", "About me", "Photography", "Dancing"];

function App() {
  return (
    <div className="App">
    <Landing/>
    { /* <Menu buttonNames={buttonNames} /> */ }
    <Contact/>
    </div>
  );
}

export default App;
