import React from "react";
import Project from "./Project";

export default function ProjectTable({ projects, onEdit, onView, onDelete }) {
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
            <Project project={project} key={i} onEdit={onEdit} onView={onView} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}
