import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { GroupBtns, PalabraAzar } from "./";

export const GameApp = () => {
  const { azar, indexPalabraAzar } = useContext(GameContext);

  useEffect(() => {
    indexPalabraAzar();
  }, []);

  return (
    <div>
      {/* Palabra y descripciones al azar */}

      <PalabraAzar />

      {/* Botones  */}
      <div>
        <GroupBtns />
      </div>
    </div>
  );
};
