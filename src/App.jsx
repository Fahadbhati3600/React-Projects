import { useState } from "react";
import "./App.css";
import DisplayGame from "./Components/DisplayGame";
import GamePlay from "./Components/GamePlay";


function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);
  
  const isToggle = ()=>{
    setIsGameStarted(prev => !prev)
  }
  
  return (
    <>
    {isGameStarted ? <GamePlay/>:<DisplayGame toggle = {isToggle}/>}
     
    </>
  );
}

export default App;
