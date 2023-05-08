import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Expense from "./components/Expense";
import Income from "./components/Income";

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
  console.log(`incomes`, incomes);
  console.log(data.imcome)
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home incomes={incomes} expenses={expenses} />}
          />
          <Route path="expense" element={<Expense data={data} />} />
          <Route path="income" element={<Income data={data} />} />
         
        </Routes>
      </div>
    </>
  );
}

export default App;
