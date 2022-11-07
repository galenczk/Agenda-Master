import React from "react";
import { useNavigate } from "react-router-dom";


export default function Customer({ customer }) {

    const navigate = useNavigate()

  return (
    <>
      <tr class="text-center">
        <td>{customer.company}</td>
        <td>{customer.first_name}</td>
        <td>{customer.last_name}</td>
        <td>{customer.email}</td>
        <td>{customer.phone_number}</td>
        <td>{customer.annual_revenue}</td>
        <td>
          <button class="btn btn-green" onClick={() =>{navigate("/customer")}}>View</button>
        </td>
        <td>
          <button class="btn-small btn-red" onClick={() =>{}}>Delete</button>
        </td>
      </tr>
    </>
  );
}
