import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

export const PalabraAzar = () => {
  const { azar, palabra, palabraAZar, letras } = useContext(GameContext);

  useEffect(() => {
    palabraAZar();
  }, [azar]);

  return (
    <div className="container mx-auto text-center border-b py-20">
      <div>{<p>{palabra.desc}</p>}</div>
      <div className="py-12 flex justify-center">
        {palabra?.pala?.map((letra, i) => (
          <div
            key={i}
            className="mx-5 border-b border-gray-900 text-3xl w-12 h-8"
          >
            {letras.indexOf(letra) === -1 ? "" : letra}
          </div>
        ))}
      </div>
    </div>
  );
};
