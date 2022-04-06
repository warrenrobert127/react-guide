import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 'e1', title: "Car Insurance", amount: 117.54, date: new Date(2021, 12, 15) },
    { id: 'e2', title: "Brake job", amount: 175.94, date: new Date(2020, 8, 29) },
    { id: 'e3', title: "Pizza", amount: 37.0, date: new Date(2021, 5, 10) },
    { id: 'e4', title: "Booze", amount: 90.54, date: new Date(2022, 3, 25) },
  ];

const addExpenseHandler = expenses => {
  console.log('In App.js');
  console.log(expenses);
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}>Let's get started!</NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
