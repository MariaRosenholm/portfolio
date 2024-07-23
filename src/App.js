import Menu from "./Components/menu";
import Details from "./Components/details";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/landing";

const buttonNames = ["Coding", "About me", "Photography", "Dancing"];

function App() {
  return (
    <div className="App">
      <p className="sname">Maria</p>
      <p className="lname">Rosenholm</p>
      <p className="title1">Web</p>
      <p className="title2">developer</p> 
    <Landing/>
    { /* <Menu buttonNames={buttonNames} /> */ }
    <Details/>
    </div>
  );
}

export default App;
