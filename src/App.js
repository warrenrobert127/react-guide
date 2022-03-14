import ExpenseItem from "./components/expenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 117.54, date: new Date(2021, 12, 15) },
    { title: "Brake job", amount: 175.94, date: new Date(2020, 8, 29) },
    { title: "Pizza", amount: 37.0, date: new Date(2021, 5, 10) },
    { title: "Booze", amount: 90.54, date: new Date(2022, 3, 25) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
