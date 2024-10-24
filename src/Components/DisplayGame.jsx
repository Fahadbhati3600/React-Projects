import styled from "styled-components";

const DisplayGame = ({toggle}) => {
  return (
    <DisplayContainer>
      <div className="flex">
        <div>
          <img src="./Images/dicesss.png" alt="Dice Logo" />
        </div>
        <div className="text">
          <h1>DICE GAME</h1>
          <Button
          onClick={toggle}
          >Play Now</Button>
        </div>
      </div>
    </DisplayContainer>
  );
};

export default DisplayGame;

const DisplayContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  overflow-y: hidden;

  .text {
    height: 200px;
    width: 560px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;

    h1 {
      font-size: 96px;
      white-space: nowrap;
      font-weight: 900;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: pink; */
    height: 522px;
    width: 1382px;
    margin: 220px;
  }
`;

const Button = styled.div`
  height: 45px;
  width: 220px;
  background-color: black;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s, background, ease-in;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s, background, ease-in;
  }
`;
