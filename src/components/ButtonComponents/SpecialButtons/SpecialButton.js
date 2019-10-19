import React from "react";

const SpecialButton = (specials) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button value={specials}>{specials.char}</button>}
    </>
  );
};

export default SpecialButton;
