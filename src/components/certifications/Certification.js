import React from "react";

export default function Certification({ certification, onEdit, onDelete }) {
  return (
    <>
      <tr class="text-center">
        <td>{certification.title}</td>
        <td>{certification.description}</td>
        <td>{certification.duration}</td>
        <td><button class="btn btn-blue" onClick={onEdit}>Edit</button></td>
        <td><button class="btn-small btn-red" onClick={onDelete}>Del</button></td>
        <td>
        </td>
      </tr>
    </>
  );
}
