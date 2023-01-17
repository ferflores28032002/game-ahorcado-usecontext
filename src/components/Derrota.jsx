import { BtnLink } from "./BtnLink";

export const Derrota = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-indigo-100">
      <div className="text-center">
        <div className="bg-white py-10 px-4 rounded-2xl flex flex-col items-center justify-center">
          <p>
           ¡Lo sentimos! Has perdido, vuelve a jugar y demuestra que eres el mejor
          </p>
          <p>
            La palabra correcta es: <strong>REACTJS</strong>
          </p>
          <img
            className="w-32 border-gray-600 py-4"
            src={"el_ahorcado6.png"}
            alt="imagen"
          />
          <div>
            <BtnLink ruta="/juego" name="Volver a Jugar" />
          </div>
        </div>
      </div>
    </div>
  );
};
