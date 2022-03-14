
import Expenses from "./components/Expenses";

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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
