import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const userid = 34;

  const [data, setData] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users?userid=${userid}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIncomes(data[0].income);
        setExpenses(data[0].expenses);
      })
      .catch((error) => console.error(error));
  }, [userid]);

  console.log(`expenses`, expenses);

  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home incomes={incomes} expenses={expenses} />}
          />
          <Route path="expense" element={<Expense  expenses={expenses} />} />
          <Route path="income" element={<Income incomes={incomes} />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
