import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
import CardItem from "../UI/CardItem";
import { useState } from "react";

const ExpenseItem = (props) => {
  // update state, call only inside the function not outside or not nested function.

  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  // get data using props
  return (
    <CardItem className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.data.amount}</div>
        <button type="button" onClick={clickHandler}>
          Click Me!
        </button>
      </div>
    </CardItem>
  );
};

export default ExpenseItem;
