import React, { useEffect, useState } from "react";
import Table from "./Table";

function Home({ incomes, expenses }) {

   const [total , setTotal] = useState(0)
   const [totalIncome , setTotalIncome] = useState(0)
   const [totalExpense , setTotalExpense] = useState(0)


  const expenses3 = expenses.filter((_, index) => index >= expenses.length - 3);
  const expenses4 = expenses3.sort((a, b) => b.id - a.id);

  useEffect(()=>{

    const totalincome = incomes.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    const totalexpense = expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    setTotal(totalincome - totalexpense)
    setTotalExpense(totalexpense)
    setTotalIncome(totalincome)
  },[incomes,expenses])
  

  const income3 = incomes.filter((_, index) => index >= incomes.length - 3);
  const income4 = income3.sort((a, b) => b.id - a.id);

  const expenses1 = expenses4.map((data) => {
    return (
      <>
        <Table data={data} />
      </>
    );
  });

  const Income1 = income4.map((data) => {
    return (
      <>
        <Table data={data} />
      </>
    );
  });

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label for="amountInput">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amountInput"
                placeholder="Enter amount"
              />
            </div>
            <div className="form-group">
              <label for="typeSelect">Type</label>
              <select className="form-control" id="typeSelect">
                <option value="1">Expense</option>
                <option value="2">Income </option>
              </select>
            </div>
            <div className="form-group mt-2">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <p className="text-center"> Total income : {totalIncome}</p>
        <p className="text-center"> Total Expense : {totalExpense}</p>
        <p className="text-center"> Profit : {total}</p>
        <div className="col-md-6">
          <h2>Expenses</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>{expenses1}</tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h2>Incomes</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>{Income1}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
