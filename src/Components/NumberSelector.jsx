import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber, error,setError }) => {
  const btnArr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("")
  };
  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="btnFlex">
        {btnArr.map((i, value) => (
          <NumButton
            isSelected={value == selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value + 1}
          </NumButton>
        ))}
      </div>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  /* height: 140px; */
  width: 550px;
  /* background-color: pink; */

  .error {
    color: red;
    font-size: 24px;
    gap: 9px;
  }

  .btnFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;

const NumButton = styled.div`
  height: 72px;
  width: 72px;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
