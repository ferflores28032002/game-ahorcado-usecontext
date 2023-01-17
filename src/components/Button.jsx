export const Button = ({ letra, funcion, color }) => {
  return (
    <button
    onClick={funcion}
      className={`w-10 m-1 text-sm  lg:m-2 ${color} font-semibold py-2 rounded`}
    >
      {letra}
    </button>
  );
};
