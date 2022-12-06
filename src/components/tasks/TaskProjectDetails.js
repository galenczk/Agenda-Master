import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

// Moment handles date formatting.
import Moment from "react-moment";

export default function TaskProjectDetails({ task, onEditTask, onDeleteTask }) {
  return (
    <>
      <tr class="text-center">
        <td>{task.description}</td>
        <td>{<Moment format="MM/DD/YYYY">{task.dueDate}</Moment>}</td>
        <td>{task.priority}</td>
        <td>{task.status}</td>
        <td>
          <button
            class="btn-icon btn-blue"
            onClick={() => {
              onEditTask(task.task_id);
            }}
          >
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button
            class="btn-icon-delete btn-red"
            onClick={() => {
              onDeleteTask(task.task_id);
            }}
          >
            {<MdDeleteForever size="20" />}
          </button>
        </td>
      </tr>
    </>
  );
}
