import React from 'react'

export default function Project({ project, onView }) {

  return (
    <>
      <tr
        class="text-center"
      >
        <td>{project.project_id}</td>
        <td>{project.title}</td>
        <td>{project.delivery_date}</td>
        <td>{project.proj_status}</td>
        <td>{project.customer}</td>
        <td><button onClick={onView}
          class="btn btn-blue mx-auto"
        >View</button></td>
      </tr>
    </>
  );
}
