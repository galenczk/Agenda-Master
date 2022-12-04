import React from "react";
import DeveloperRoster from "./DeveloperRoster";


export default function Developertable({ developers, onView }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {developers.map((developer, i) => (
            <DeveloperRoster developer={developer} key={i} onView={onView} />
          ))}
        </tbody>
      </table>
    </>
  );
}
