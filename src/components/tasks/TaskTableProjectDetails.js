import React from "react";
import TaskProjectDetails from "./TaskProjectDetails";

export default function TaskTableProjectDetails({ tasks, onEditTask, onDeleteTask }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <TaskProjectDetails task={task} key={i} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          ))}
        </tbody>
      </table>
    </>
  );
}
