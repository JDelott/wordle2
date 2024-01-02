// App.js
import React from "react";
import "./App.css";
import Wordle from "./components/Wordle";
import Piano from "./components/Piano";

function App() {
  return (
    <div className="App">
      <Wordle />
      <div>
        <Piano />
      </div>
      
    </div>
  );
}

export default App;
