import { useNavigate } from "react-router-dom";

export const BtnLink = ({ name, ruta }) => {
  const navegacion = useNavigate();
  const navegar = () => {
    navegacion(ruta);
  };

  return (
    <button
      onClick={navegar}
      className="rounded animate-bounce bg-indigo-400 text-white shadow-indigo-600 p-2"
    >
      {name}
    </button>
  );
};
