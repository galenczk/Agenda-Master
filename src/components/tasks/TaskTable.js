import React from "react";
import Task from "./Task";

export default function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Project</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <Task task={task} key={i} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}
