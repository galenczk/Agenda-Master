import React from "react";

export default function Certification({ certification }) {
  return (
    <>
      <tr class="text-center">
        <td>{certification.title}</td>
        <td>{certification.description}</td>
      </tr>
    </>
  );
}
