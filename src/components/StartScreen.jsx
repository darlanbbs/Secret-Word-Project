import React from "react";
import "./StartScreen.css";

export const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h2>
        Secret <strong>World</strong>
      </h2>
      <p>Clique no botão para começar o jogo</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
};
