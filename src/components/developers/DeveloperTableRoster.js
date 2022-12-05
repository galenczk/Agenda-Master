import React from "react";
import DeveloperRoster from "./DeveloperRoster";

export default function Developertable({ developers, chirality, assignDev, unassignDev, project_id }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            {chirality === "right" && <th>Add</th>}
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            {chirality === "left" && <th>Remove</th>}
          </tr>
        </thead>
        <tbody>
          {developers.map((developer, key) => (
            <DeveloperRoster
              developer={developer}
              key={key}
              chirality={chirality}
              assignDev={assignDev}
              unassignDev={unassignDev}
              project_id={project_id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
