import Menu from "./Components/menu";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const buttonNames = ["Coding", "About me", "Photography", "Dancing"];

function App() {
  return (
    <div className="App">
      <h1>Maria</h1>
      <h2>Rosenholm</h2>
      <h3>Web</h3>
      <h4>developer</h4>
      <Menu buttonNames={buttonNames} />
    </div>
  );
}

export default App;
