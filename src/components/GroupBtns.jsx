import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { Button } from "./Button";

export const GroupBtns = () => {
  const letrasBTN = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const { onLetras, correctas, erroneas, coloresBtns, victoryOrDerrota} = useContext(GameContext);

  useEffect(() => {
    victoryOrDerrota()
  }, [correctas])
  

  return (
    <div className="border text-center flex flex-wrap p-2 justify-center bg-indigo-100 shadow-2xl mr-0 lg:mr-16">
      {letrasBTN.split("").map((letra, i) =>
          
          correctas.find((e) => e === letra) ? (

            <Button color={coloresBtns[1]} key={i} letra={letra} />

          ) : erroneas.find((e) => e === letra) ? (

            <Button key={i} color={coloresBtns[2]} letra={letra} />

          ) : (
            
            <Button
              funcion={() => onLetras(letra)}
              color={coloresBtns[0]}
              key={i}
              letra={letra}
            />
          )
        )}
    </div>
  );
};
