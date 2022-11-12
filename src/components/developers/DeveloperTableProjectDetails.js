import React from "react";
import DeveloperProjectDetails from "./DeveloperProjectDetails";

export default function Developertable({ developers, onView }) {
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
          </tr>
        </thead>
        <tbody>
          {developers.map((developer, i) => (
            <DeveloperProjectDetails developer={developer} key={i} onView={onView} />
          ))}
        </tbody>
      </table>
    </>
  );
}
