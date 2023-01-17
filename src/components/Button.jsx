export const Button = ({ letra, funcion, color }) => {
  return (
    <button
    onClick={funcion}
      className={`text-white w-12 m-2 font-semibold py-2 rounded bg-indigo-500 hover:bg-indigo-700`}
    >
      {letra}
    </button>
  );
};
