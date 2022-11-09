import React from "react";
import Customer from "./Customer";

export default function CustomerTable({ customers, onView, onDelete }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>Company</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Annual Revenue</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, i) => (
            <Customer customer={customer} key={i} onView={onView} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}
