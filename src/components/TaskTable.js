import React from "react";
import Task from "./Task";

export default function TaskTable({ tasks, onOpen }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Developers Assigned</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <Task task={task} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}
