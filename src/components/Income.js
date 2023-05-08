import React from "react";
import Table from "./Table";

function Income({ incomes }) {

  const Income1 = incomes.map((data) => {
    return (
      <>
        <Table data={data} />
      </>
    );
  });
console.log(incomes)
  return (
    <div className="col-md-6">
      <h2>Expenses</h2>
      <table className="table">
        <thead>
        <th scope="col">Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
        </thead>
        <tbody>{Income1}</tbody>
      </table>
    </div>
  );
}

export default Income;
