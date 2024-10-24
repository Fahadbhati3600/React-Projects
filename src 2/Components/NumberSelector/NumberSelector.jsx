import styled from "styled-components";

const NumberSelector = ({
  errors,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <>
      <NumberSelectorVariable>
        <p className="errors">{errors}</p>
        <div className="flex">
          {arrNumber.map((value, i) => (
            //this box components meh ek key pass karna rehta ha taki react iss comp ko trace kar sake and the key should be a unique value(requirement)
            <Box
              isSelected={value === selectedNumber}
              onClick={() => numberSelectorHandler(value)} //yaha par reference nhi di jari ha balki value pass ki ja rahi ha isliye callback Function use karenge
              key={i}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </NumberSelectorVariable>
    </>
  );
};

export default NumberSelector;

const NumberSelectorVariable = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: end;

  .errors {
    color: red;
  }

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 30px;
    font-weight: 700;
    line-height: 60px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  cursor: pointer;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
