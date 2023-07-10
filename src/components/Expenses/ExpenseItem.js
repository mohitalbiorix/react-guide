import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
import CardItem from "../UI/CardItem";

const ExpenseItem = (props) => {
  // get data using props
  return (
    <CardItem className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">$ {props.data.amount}</div>
      </div>
    </CardItem>
  );
};

export default ExpenseItem;
