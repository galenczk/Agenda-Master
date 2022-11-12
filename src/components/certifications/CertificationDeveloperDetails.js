import React from "react";

export default function Certification({ certification }) {
  return (
    <>
      <tr class="text-center">
        <td>{certification.title}</td>
        <td>{certification.description}</td>
        <td>{certification.duration}</td>
        <td><button class="btn-small btn-red">Del</button></td>
        <td>
        </td>
      </tr>
    </>
  );
}
