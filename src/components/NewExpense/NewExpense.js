import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExepnseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/*    passing data from child to parent using function pointer */}
      <ExpenseForm onSaveExpenseData={saveExepnseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
