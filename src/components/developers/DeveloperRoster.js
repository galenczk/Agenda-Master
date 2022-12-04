import React from "react";

export default function DeveloperForProjectsPage({ developer, onView }) {
  return (
    <>
      <tr class="text-center">
        <td>{developer.first_name}</td>
        <td>{developer.last_name}</td>        
      </tr>
    </>
  );
}
