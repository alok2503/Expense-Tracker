import ExpenseData from "./components/Expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 1000, date: new Date(2021, 3, 28) },
    { title: "Toilet Paper", amount: 150, date: new Date(2021, 5, 14) },
    { title: "Data expense", amount: 885, date: new Date(2021, 2, 13) },
    { title: "Fuel", amount: 400, date: new Date(2021, 11, 24) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseData items={expenses} />
    </div>
  );
}

export default App;
