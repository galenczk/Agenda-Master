import React from "react";

export default function Task({ task, onEdit }) {
  return (
    <>
      <tr class="text-center">
        <td>{task.task_id}</td>
        <td>{task.description}</td>
        <td>{task.due_date}</td>
        <td>{task.priority}</td>
        <td>{task.task_status}</td>
        <td>{task.project_id}</td>
        <td>
          <button class="btn btn-blue" onClick={onEdit}>Edit</button>
        </td>
        <td>
          <button class="btn-small btn-red">Del</button>
        </td>
      </tr>
    </>
  );
}
