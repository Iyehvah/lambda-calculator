import React from "react";

const NumberButton = (numbers) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button value = {numbers}>{numbers}</button>}
    </>
  );
};

export default NumberButton;
