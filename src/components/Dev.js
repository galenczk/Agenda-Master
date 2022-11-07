import React from "react";

export default function Dev({ dev, button, buttonFunc }) {
  return (
    <>
      <tr class="text-center">
        <td>{dev.first_name}</td>
        <td>{dev.last_name}</td>
        <td>{dev.email}</td>
        <td>{dev.phone_number}</td>
        <td>
          <button
            class="btn-small btn-red"
            onClick={buttonFunc}
          >{button}</button>
        </td>
        
      </tr>
    </>
  );
}
