import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Customer({ customer, onView, onDelete, onEdit }) {
  const navigate = useNavigate();

  return (
    <>
      <tr class="text-center">
        <td>{customer.customer_id}</td>
        <td>{customer.company_name}</td>
        <td>{customer.first_name}</td>
        <td>{customer.last_name}</td>
        <td>{customer.email}</td>
        <td>{customer.annual_revenue}</td>
        <td>
          <button
            class="btn-icon btn-blue"
            onClick={() => {
              onEdit(customer.customer_id);
            }}
          >
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button
            class="btn-icon-delete btn-red"
            onClick={() => {
              onDelete(customer.customer_id);
            }}
          >
            {<MdDeleteForever size="20" />}
          </button>
        </td>
      </tr>
    </>
  );
}
