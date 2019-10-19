import React, { useState } from "react";
//import any components needed
import NumberButton from './NumberButton.js';
//Import your array data to from the provided data file
import { numbers } from '../../../data.js'


function LeNumbers() {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {number.map((numbers, index) => {
         return (
        <NumberButton numbers={numbers} key={index}
         />
        );
       })}
    </div>
  );
};
export default LeNumbers;

// {operator.map( (operators, index) => {
//   return(
//     <OperatorButton
//        operators={operators} key={index}
//     />
//   );
// })}