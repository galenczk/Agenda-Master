import React from "react";
import TaskProjectDetails from "./Task";

export default function TaskTableProjectDetails({ tasks, onOpen }) {
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
            <TaskProjectDetails task={task} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}
