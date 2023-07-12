import "../Expenses/Expenses.css";
import CardItem from "../UI/CardItem";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExtensesList from "./ExtensesList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFltererYear] = useState("2020");

  // derived state/value
  let filterInfoTxt = "2019,2021 & 2022";
  if(filteredYear === "2019"){
    filterInfoTxt = "2020,2021 & 2022";
  }
  else if(filteredYear === "2021"){
    filterInfoTxt = "2019,2020 & 2022";
  }
  else if(filteredYear === "2020"){
    filterInfoTxt = "2019,2021 & 2022";
  }
  else{
    filterInfoTxt = "2019,2020 & 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFltererYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <CardItem className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>Data for years {filterInfoTxt} is hidden.</p>

      {/*  with iterator */}
      {/*    key => used to not reflect to another data. reflact only updated data. */}
      {/* {props.expenses.map((expense) => (
        <ExpenseItem data={expense} key={expense.id}></ExpenseItem>
      ))} */}

      {/*  without iterator */}
      {/* <ExpenseItem data={props.expenses[0]}></ExpenseItem>
      <ExpenseItem data={props.expenses[1]}></ExpenseItem>
      <ExpenseItem data={props.expenses[2]}></ExpenseItem>
      <ExpenseItem data={props.expenses[3]}></ExpenseItem> */}
    <ExpensesChart expenses={filteredExpense}></ExpensesChart>
    <ExtensesList expenses={filteredExpense}></ExtensesList>
    </CardItem>
  );
};

export default Expenses;
