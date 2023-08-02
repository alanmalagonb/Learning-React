// Importing state
//import React, { useState } from 'react';

// Considering css file
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Custom Component

// Component : Just a JS function
// Convention name function as js file, must start with uppercase

// 1 parameter props : atributes xml
const ExpenseItem = (props) => {
  // Hook: called inside react compoenent
  // First Array element: props value
  // Second element: updating function
  //const [title, setTitle] = useState(props.title);

  // Event
  // function clickHandler(){}
  /*const clickHandler = () => {
    setTitle('Updated!');
  };*/

  // Return JSX
  // Only 1 root element allowed
  // className instead of class
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>

        {/*<button onClick={clickHandler}>Change Title</button>*/}
      </Card>
    </li>
  );
};
// Export to use in other files
export default ExpenseItem;
