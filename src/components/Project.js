import React from 'react'

export default function Project({ project, onOpen }) {

  return (
    <>
      <tr
        class="text-center"
      >
        <td>{project.title}</td>
        <td>{project.description}</td>
        <td>{project.delivery_date}</td>
        <td>{project.proj_status}</td>
        <td><button onClick={onOpen}
          class="btn btn-green mx-auto"
        >Open</button></td>
      </tr>
    </>
  );
}
