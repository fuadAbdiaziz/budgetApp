import React from "react";

function Table({data}) {
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>Ksh {data.amount}</td>
        <td>{data.date}</td>
        <td>{data.date}</td>
        <td><button className="btn btn-sm btn-danger">Delete</button></td>

      </tr>
    </>
  );
}

export default Table;
