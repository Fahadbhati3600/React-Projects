import GamePlay from "./Components/GamePlay/GamePlay";
import StartGame from "./Components/StartGame/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const isToggled = () => {
    setIsGameStarted((prev) => !prev);
  };

  return <>{isGameStarted ? <GamePlay /> : <StartGame toggle={isToggled} />}</>;
}

export default App;
