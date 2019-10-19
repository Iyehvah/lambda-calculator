import React from "react";

const OperatorButton = (operators) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button value={operators.value}>{operators.char}></button>};
    </>
  );
};

export default OperatorButton;
