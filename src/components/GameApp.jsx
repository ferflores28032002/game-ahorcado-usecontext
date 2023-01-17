import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { GameInicio, GroupBtns, ImagenAhorcado, PalabraAzar } from "./";
import { Derrota } from "./Derrota";
import { Victoria } from "./Victoria";

export const GameApp = () => {
  const { indexPalabraAzar } = useContext(GameContext);

  useEffect(() => {
    indexPalabraAzar();
  }, []);

  return (
    <div className="bg-indigo-100 min-h-screen">
      <PalabraAzar />

      <div className="flex flex-col lg:flex-row px-12 py-4 items-center justify-center container mx-auto">
        <GroupBtns />
        <ImagenAhorcado />
      </div>
    </div>
  );
};
