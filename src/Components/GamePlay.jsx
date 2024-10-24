import React from "react";
import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineBtn } from "../Button";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetGame = () => {
    setScore(0);
  };

  const rollDiceImage = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <GamePlayContainer>
      <div className="overAllFlex">
        <div className="gameFlex">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            setError={setError}
          />
        </div>
        <RollDice currentDice={currentDice} rollDiceImage={rollDiceImage} />
        <BtnGameContainer>
          <OutlineBtn onClick={resetGame}>Reset Score</OutlineBtn>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
          {showRules && <ShowRules />}
        </BtnGameContainer>
      </div>
    </GamePlayContainer>
  );
};

export default GamePlay;

const GamePlayContainer = styled.div`
  height: 150px;
  width: 1480px;
  /* background-color: rebeccapurple; */
  margin: 80px auto;

  .gameFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BtnGameContainer = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
