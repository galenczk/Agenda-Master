import React from "react";
import ProjectCustomerDetails from "./ProjectCustomerDetails";

export default function ProjectTable({ projects, onOpen }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Title</th>
            <th>Delivery Date</th>
            <th>Status</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <ProjectCustomerDetails project={project} key={i} onOpen={onOpen} />
          ))}
        </tbody>
      </table>
    </>
  );
}
