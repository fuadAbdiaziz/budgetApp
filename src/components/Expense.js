import React from "react";
import Table from "./Table";

function Expense({ expenses }) {
  const expenses1 = expenses.map((data) => {
    return (
      <>
        <Table data={data} />
      </>
    );
  });

  


  return (
    <div className="col-md-6">
      <h2>Expenses</h2>
      <table className="table">
        <thead>
        <th scope="col">Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
        </thead>
        <tbody>{expenses1}</tbody>
      </table>
    </div>
  );
}

export default Expense;
