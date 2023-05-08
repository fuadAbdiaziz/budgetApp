import React from "react";

function Table({ data }) {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>Ksh {data.amount}</td>
        <td>{data.date}</td>
        <td>{data.date}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(data.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Table;
