import React from "react";

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
        <td>{task.devs_assigned}</td>
        <td>
          <button class="btn btn-blue"
            onClick={()=>{onEditTask(task.task_id)}}
          >Edit</button>
        </td>
        <td>
          <button class="btn-small btn-red"
            onClick={()=>{onDeleteTask(task.task_id)}}
          >Del</button>
        </td>
      </tr>
    </>
  );
}
