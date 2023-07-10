import "../Expenses/Expenses.css";
import CardItem from "../UI/CardItem";
import ExpenseItem from "../Expenses/ExpenseItem";

const Expenses = (props) => {
  return (
    <CardItem className="expenses">
      <ExpenseItem data={props.expenses[0]}></ExpenseItem>
      <ExpenseItem data={props.expenses[1]}></ExpenseItem>
      <ExpenseItem data={props.expenses[2]}></ExpenseItem>
      <ExpenseItem data={props.expenses[3]}></ExpenseItem>
    </CardItem>
  );
};

export default Expenses;
