// Import dependencies
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
            class="btn-icon btn-blue"
            onClick={() => {
              onEdit(task.task_id);
            }}
          >
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button
            class="btn-icon-delete btn-red"
            onClick={() => {
              onDelete(task.task_id);
            }}
          >
            {<MdDeleteForever size="20" />}
          </button>
        </td>
      </tr>
    </>
  );
}
