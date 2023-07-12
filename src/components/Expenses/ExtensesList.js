import "./ExtensesList.css";
import ExpenseItem from './ExpenseItem';

const ExtensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem data={expense} key={expense.id}/>
      ))}
    </ul>
  );
};

export default ExtensesList;
