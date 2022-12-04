import React from "react";

export default function DeveloperForProjectsPage({ developer }) {
  return (
    <>
      <tr class="text-center">
        <td>{developer.developer_id}</td>
        <td>{developer.first_name}</td>
        <td>{developer.last_name}</td>        
      </tr>
    </>
  );
}
