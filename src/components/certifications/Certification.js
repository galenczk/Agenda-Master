import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Certification({ certification, onEdit, onDelete }) {
  return (
    <>
      <tr class="text-center">
        <td>{certification.title}</td>
        <td>{certification.description}</td>
        <td>{certification.duration}</td>
        <td>
          <button
            class="btn-icon btn-blue"
            onClick={() => {
              onEdit(certification.certification_id);
            }}
          >
            {<FaEdit size="20" />}
          </button>
        </td>
        <td>
          <button
            class="btn-icon-delete btn-red"
            onClick={() => {
              onDelete(certification.certification_id);
            }}
          >
            {<MdDeleteForever size="20" />}
          </button>
        </td>
        <td></td>
      </tr>
    </>
  );
}
