// Import dependencies
import React from "react";

// Moment handles date formatting
import Moment from "react-moment";

export default function Task({ task, onEdit, onDelete }) {
  return (
    <>
      <tr class="text-center">
        <td>{task.task_id}</td>
        <td>{task.description}</td>
        <td>{<Moment format="YYYY/MM/DD">{task.due_date}</Moment>}</td>
        <td>{task.priority}</td>
        <td>{task.task_status}</td>
        <td>{task.project_id}</td>
        <td>
          <button
            class="btn btn-blue"
            onClick={() => {
              onEdit(task.task_id);
            }}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            class="btn-small btn-red"
            onClick={() => {
              onDelete(task.task_id);
            }}
          >
            Del
          </button>
        </td>
      </tr>
    </>
  );
}
