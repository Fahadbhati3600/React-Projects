import styled from "styled-components";

const ShowRules = () => {
  return (
    <ShowContainer>
      <div>
        <h2>How to Play Dice Game</h2>
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
          3. After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>4. If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </ShowContainer>
  );
};

export default ShowRules;

const ShowContainer = styled.div`
  height: 108px;
  width: 758px;
  text-align: left;
  margin: 25px;
  background-color: #fbf1f1;
`;
