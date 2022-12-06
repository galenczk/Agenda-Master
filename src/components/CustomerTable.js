import React from "react";
import Customer from "./Customer";

export default function CustomerTable({ customers, onView, onDelete, onEdit }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Annual Revenue</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, i) => (
            <Customer customer={customer} key={i} onView={onView} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </>
  );
}
