import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Project({ project, onEdit, onView, onDelete }) {
  return (
    <>
      <tr class="text-center">
        <td>{project.project_id}</td>
        <td>{project.title}</td>
        <td>{project.delivery_date}</td>
        <td>{project.proj_status}</td>
        <td>{project.customer_id}</td>
        <td>
          <button onClick={()=>{onView(project.project_id)}} class="btn btn-green mx-auto">
            View
          </button>
        </td>
        <td>
          <button onClick={()=>{onEdit(project.project_id)}} class="btn-icon btn-blue mx-auto">
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button onClick={()=>{onDelete(project.project_id)}} class="btn-icon-delete btn-red mx-auto">
            {<MdDeleteForever size="20" />}
          </button>
        </td>
      </tr>
    </>
  );
}
