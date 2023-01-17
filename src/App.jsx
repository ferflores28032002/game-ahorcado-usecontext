import { GameApp, GameInicio } from "./components";
import { Route, Routes } from "react-router-dom";
import { Victoria } from "./components/Victoria";
import { Derrota } from "./components/Derrota";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GameInicio />} />
      <Route path="/victory" element={<Victoria />} />
      <Route path="/derrota" element={<Derrota />} />
      <Route path="/juego" element={<GameApp />} />
      <Route path="/*" element={<GameInicio />} />
    </Routes>
  );
};

export default App;
