import React from "react";
import { BtnLink } from "./BtnLink";

export const GameInicio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-indigo-100">
      <div className="text-center">
        <div className="bg-white py-10 px-4 rounded-2xl flex flex-col items-center justify-center">
          <h1 className="text-xl py-4 font-semibold">Juego el Ahorcado</h1>

          <p>
            ¿Qué tanto sabes sobre la libreria React.js y algunos framework de
            la web?
          </p>
          <p>Prueba tus conocimientos y demuestra que eres el mejor</p>
          <img className="w-24 py-4 imagen" src={"react.svg"} alt="react" />

          <div className="py-10">
            <BtnLink ruta="/juego" name="Jugar" />
          </div>
        </div>
      </div>
    </div>
  );
};
