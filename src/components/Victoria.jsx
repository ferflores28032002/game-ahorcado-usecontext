import { BtnLink } from "./BtnLink";

export const Victoria = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-indigo-100">
      <div className="text-center">
        <div className="bg-white py-10 px-4 rounded-2xl flex flex-col items-center justify-center">
          <p>
            ¡Muy bien, Has ganado y continuas manteniendo tu cabeza sobre los
            hombros!
          </p>
          <p>
            La palabra correcta es: <strong>REACTJS</strong>
          </p>
          <img
            className="w-32 border-gray-600 py-4"
            src={"el_ahorcado3.png"}
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
