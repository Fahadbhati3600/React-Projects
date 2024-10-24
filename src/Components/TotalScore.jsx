import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <TotalScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </TotalScoreContainer>
  );
};

export default TotalScore;

const TotalScoreContainer = styled.div`
  height: 135px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size:100px;
    font-weight: 500;
  }

  p{
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
  }
  
`;
