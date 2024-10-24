import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { TotalScore } from "../TotalScore/TotalScore";
import NumberSelector from "../NumberSelector/NumberSelector";
import RollDice from "../RollDice/RollDice";
import { Button, OutlineBtn } from "../../styled/Button";
import Rules from "../RulesValue/Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDiced, setcurrentDiced] = useState(1);
  const [errors, setErrors] = useState("");
  const [ShowRules, setShowsRules] = useState(false);

  
  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setErrors("You have not selected any Number");

      return;
    }
    setErrors("");
    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDiced((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <MainContainer>
        <TotalScore score={score} />
        <NumberSelector
          setErrors={setErrors}
          errors={errors}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </MainContainer>
      <RollDice currentDiced={currentDiced} rollDice={rollDice} />
      <Btncontainer>
        <OutlineBtn onClick={resetScore}>Reset Button</OutlineBtn>
        <Button
        onClick={()=>setShowsRules((prev)=> !prev)}
        >{ShowRules ? "HIDE" : "SHOW "} Rules </Button>
        {ShowRules && <Rules />}
      </Btncontainer>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Btncontainer = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 10px auto;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
