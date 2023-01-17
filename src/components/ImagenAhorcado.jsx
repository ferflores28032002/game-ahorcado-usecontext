import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const ImagenAhorcado = () => {
  const { imagen } = useContext(GameContext);

  return (
    <div className="p-4 bg-white shadow-2xl">
      <img className="w-72" src={`el_ahorcado${imagen}.png`} alt="imagen" />
    </div>
  );
};
