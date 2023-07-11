import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Mobile",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const AddExpenseHandler = (expense) => {
  console.log(expense, "expense");
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <NewExpense onAddExpense={AddExpenseHandler}></NewExpense>
        {/* pass data using props to the components */}
        <Expenses expenses={expenses}></Expenses>
      </header>
    </div>
  );

  /* 
   // create dynamic element using jsx
  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},"Let's get started"),
    React.createElement(Expenses,{expenses:expenses}),
  ) 
  */
};

export default App;
