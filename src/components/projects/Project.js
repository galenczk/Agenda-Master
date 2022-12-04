import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

// Moment handles date formatting.
import Moment from "react-moment";

export default function Project({ project, onEdit, onView, onDelete }) {
  return (
    <>
      <tr class="text-center">
        <td>{project.project_id}</td>
        <td>{project.title}</td>
        <td>{<Moment format="MM/DD/YYYY">{project.delivery_date}</Moment>}</td>
        <td>{project.proj_status}</td>
        <td>{project.customer_id}</td>
        <td>
          <button
            onClick={() => {
              onView(project.project_id);
            }}
            class="btn btn-green mx-auto"
          >
            Manage Project
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              onEdit(project.project_id);
            }}
            class="btn-icon btn-blue mx-auto"
          >
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              onDelete(project.project_id);
            }}
            class="btn-icon-delete btn-red mx-auto"
          >
            {<MdDeleteForever size="20" />}
          </button>
        </td>
      </tr>
    </>
  );
}
