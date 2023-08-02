import React, { useState } from "react";

import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesChart from './ExpensesChart';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");


  let filteredInfoText = "2019, 2021 & 2022"

  if(filteredYear === '2019'){
    filteredInfoText ='2020,2021 & 2022'
  } else if (filteredYear === '2020'){
    filteredInfoText ='2019,2021 & 2022'
  } else if (filteredYear === '2021'){
    filteredInfoText ='2019,2020 & 2022'
  } else if (filteredYear === '2022'){
    filteredInfoText ='2019,2020 & 2021'
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* Filter by Year */
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>{filteredInfoText}</p>
         <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
