import React from "react";
import Dev from "./Dev";

export default function Devtable({ devs, button, buttonFunc }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {devs.map((dev, i) => (
            <Dev dev={dev} key={i} button={button} buttonFunc={buttonFunc} />
          ))}
        </tbody>
      </table>
    </>
  );
}
