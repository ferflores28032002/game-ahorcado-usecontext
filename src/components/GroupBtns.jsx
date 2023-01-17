import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Button } from "./Button";

export const GroupBtns = () => {
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const { onLetras } = useContext(GameContext);

  return (
    <div className="container mx-auto">
      {letras.split("").map((letra, i) => (
        <Button funcion={() => onLetras(letra)} key={i} letra={letra} />
      ))}
    </div>
  );
};
