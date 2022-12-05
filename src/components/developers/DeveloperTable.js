import React from "react";
import Developer from "./Developer";

export default function Developertable({ developers, onView, onEdit, onDelete }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th></th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {developers.map((developer, i) => (
            <Developer developer={developer} key={i} onView={onView} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}
