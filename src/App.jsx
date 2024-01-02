// App.js
import React from "react";
import "./App.css";
import Wordle from "./components/Wordle";
import Piano from "./components/Piano";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Wordle />
      <div>
        <Player />
      </div>
      <div>
        <Piano />
      </div>
      
    </div>
  );
}

export default App;
