import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

export const PalabraAzar = () => {
  const { azar, palabra, palabraAZar, letras, imagen } =
    useContext(GameContext);

  useEffect(() => {
    palabraAZar();
  }, [azar]);

  return (
    <div className="container mx-auto text-center pt-10 px-8">
      <h2 className="text-xl pb-4 font-semibold">El Ahorcado</h2>
      <div>{<p className="text-sm"><strong>PISTA: </strong>{palabra.desc}</p>}</div>
      <div className="py-8 flex justify-center">
        {palabra?.pala?.map((letra, i) => (
          <div
            key={i}
            className="mx-2 lg:mx-3 border-b  border-indigo-400 text-sm lg:text-2xl w-8 h-6 lg:h-8"
          >
            {letras.indexOf(letra) === -1 ? "" : letra}
          </div>
        ))}
      </div>
      <div className=" text-center text-sm  lg:text-start lg:pl-12">
        <strong>Intentos:</strong> {imagen - 1} - 6
      </div>
    </div>
  );
};
