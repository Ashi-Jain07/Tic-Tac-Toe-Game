"use client"

import { createContext, useState } from "react";

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <PlayerContext.Provider value={{ player1, setPlayer1, player2, setPlayer2 }}>
      {children}
    </PlayerContext.Provider>
  );
};