import "../Expenses/Expenses.css";
import CardItem from "../UI/CardItem";
import ExpenseItem from "../Expenses/ExpenseItem";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFltererYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFltererYear(selectedYear);
  };
  return (
    <CardItem className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem data={props.expenses[0]}></ExpenseItem>
      <ExpenseItem data={props.expenses[1]}></ExpenseItem>
      <ExpenseItem data={props.expenses[2]}></ExpenseItem>
      <ExpenseItem data={props.expenses[3]}></ExpenseItem>
    </CardItem>
  );
};

export default Expenses;
