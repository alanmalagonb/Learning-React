import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (event) => {
    /*setUserInput((prevState)=>{
        return {...prevState,enteredTitle: event.target.value};
    });*/
    /*setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
    });*/
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    /*setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
    });*/
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    /*setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    });*/
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);

    // Communicate up to the parent component
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // Alternative: Creating A Shared Handler Function
  const inputChangeHandler = (identifier,value) => {
    if(identifier === 'title'){
      setEnteredTitle(value)
    } else if(identifier==='date'){
      setEnteredDate(value)
    }else{
      setEnteredAmount(value)
    }
  }

  // User Input
  // Two way binding value={entered}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => {
              inputChangeHandler('title',event.target.value)
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
