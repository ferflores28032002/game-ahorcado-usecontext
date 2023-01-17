import { useState } from "react";
import { GameContext } from "./GameContext";
import PALABRAS from "../data/palabras.json";
import { useNavigate } from "react-router-dom";

export const GameProvider = ({ children }) => {
  const [azar, setAzar] = useState({});
  const [palabra, setPalabra] = useState([]);
  const [letras, setLetras] = useState([]);
  const [correctas, setCorrectas] = useState([]);
  const [erroneas, setErroneas] = useState([]);
  const [imagen, setImagen] = useState(1);
  const [palaAdivinar, setPalaAdivinar] = useState('')
  const navegacion = useNavigate();
  const coloresBtns = [
    "bg-white text-dark border border-indigo-50 hover:bg-indigo-200",
    "bg-green-500 text-white",
    "bg-red-500 text-white",
  ];

  const indexPalabraAzar = () => {
    setAzar(Math.floor(Math.random() * PALABRAS.length));
  };
  const inicialState = () => {
    setCorrectas([]);
    setErroneas([]);
    setImagen(1);
    setLetras([]);
  };

  const palabraAZar = () => {
    setPalabra({
      desc: PALABRAS[azar]?.description,
      pala: PALABRAS[azar]?.encontrar.split(""),
    });
    setPalaAdivinar(PALABRAS[azar]?.encontrar)
  };

  const onLetras = (letra) => {
    setLetras([...letras, letra]);

    if (palabra.pala.indexOf(letra) >= 0) {
      setCorrectas([...correctas, letra]);
    } else {
      setErroneas([...erroneas, letra]);
      setImagen(imagen + 1);

      if (imagen > 5) {
        navegacion("/derrota");
        inicialState();
      }
    }
  };

  const victoryOrDerrota = () => {
    let noEncontrado = 0;

    palabra?.pala?.map((p) => {
      if (letras.find((e) => e === p) === undefined) {
        noEncontrado++;
      }
    });

    if (noEncontrado === 0 && correctas.length > 0) {
      navegacion("/victory");
      inicialState();
    }
  };

  return (
    <GameContext.Provider
      value={{
        azar,
        indexPalabraAzar,
        palabra,
        palabraAZar,
        onLetras,
        letras,
        erroneas,
        correctas,
        coloresBtns,
        victoryOrDerrota,
        imagen,
        palaAdivinar
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
