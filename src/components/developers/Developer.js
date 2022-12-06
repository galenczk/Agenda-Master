import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Developer({ developer, onView, onEdit, onDelete }) {
  return (
    <>
      <tr class="text-center">
        <td>{developer.developer_id}</td>
        <td>{developer.first_name}</td>
        <td>{developer.last_name}</td>
        <td>{developer.email}</td>
        <td>{developer.phone_number}</td>
        <td>
          <button
            class="btn btn-green"
            onClick={() => {
              onView(developer.developer_id);
            }}
          >
            Certifications
          </button>
        </td>
        <td>
          <button
            class="btn-icon btn-blue"
            onClick={() => {
              onEdit(developer.developer_id);
            }}
          >
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button
            class="btn-icon-delete btn-red"
            onClick={() => {
              onDelete(developer.developer_id);
            }}
          >
            {<MdDeleteForever size="20" />}
          </button>
        </td>
      </tr>
    </>
  );
}
