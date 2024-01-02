// App.js
import React, { useEffect } from "react";
import "../styles/piano.css";
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,


} from "./tone.fn.js";



const keys = [
  { note: "A", onClick: playC4 },
  { note: "W", onClick: playDb4 },
  { note: "S", onClick: playD4 },
  { note: "E", onClick: playEb4 },
  { note: "D", onClick: playE4 },
  { note: "F", onClick: playF4 },
  { note: "T", onClick: playGb4 },
  { note: "G", onClick: playG4 },
  { note: "Y", onClick: playAb4 },
  { note: "H", onClick: playA4 },
  { note: "U", onClick: playBb4 },
  { note: "J", onClick: playB4 },
  { note: "K", onClick: playC5 },
];

const Piano = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      playNote(event);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 
  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div className="piano">
       
        <div className="white-key" onClick={playC4}></div>
        <div className="black-key" onClick={playDb4}></div>
        <div className="white-key" onClick={playD4}></div>
        <div className="black-key" onClick={playEb4}></div>
        <div className="white-key" onClick={playE4}></div>
        <div className="white-key" onClick={playF4}></div>
        <div className="black-key" onClick={playGb4}></div>
        <div className="white-key" onClick={playG4}></div>
        <div className="black-key" onClick={playAb4}></div>
        <div className="white-key" onClick={playA4}></div>
        <div className="black-key" onClick={playBb4}></div>
        <div className="white-key" onClick={playB4}></div>
        <div className="white-key" onClick={playC5}></div>
  
      </div>
    </div>
  );
}
export default Piano;
