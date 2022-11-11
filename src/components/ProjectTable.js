import React from "react";
import Project from "./Project";

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
            <Project project={project} key={i} onOpen={onOpen} />
          ))}
        </tbody>
      </table>
    </>
  );
}
