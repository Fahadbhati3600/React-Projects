import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDiceImage  }) => {
  return (
    <DiceContainer>
      <div className="dices" onClick={rollDiceImage}>
        <img src={`./Images/dice_${currentDice}.png`} alt="Dice 1" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;

  .dices {
    cursor: pointer;
  }

  p {
    font-size: 26px;
    font-weight: 700;
    line-height: 50px;
  }
`;
