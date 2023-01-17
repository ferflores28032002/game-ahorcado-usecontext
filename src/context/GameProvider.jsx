import { useState } from "react";
import { GameContext } from "./GameContext";
import PALABRAS from "../data/palabras.json";

export const GameProvider = ({ children }) => {
  const [azar, setAzar] = useState({});
  const [palabra, setPalabra] = useState([]);
  const [letras, setLetras] = useState([])

  const indexPalabraAzar = () => {
    setAzar(Math.floor(Math.random() * PALABRAS.length));
  };

  const palabraAZar = () => {
    setPalabra({
      desc: PALABRAS[azar]?.description,
      pala: PALABRAS[azar]?.encontrar.split(""),
    });
  };

  const onLetras = (letra) => {
    setLetras([...letras, letra])
  }

  return (
    <GameContext.Provider
      value={{
        azar,
        indexPalabraAzar,
        palabra,
        palabraAZar,
        onLetras,
        letras
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
