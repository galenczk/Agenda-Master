import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export default function DeveloperForProjectsPage({ developer, chirality }) {
  return (
    <>
      <tr class="text-center">
        {chirality === "right" && (
          <td>
            <button className="btn btn-green">{<AiOutlineArrowLeft />}</button>
          </td>
        )}
        <td>{developer.developer_id}</td>
        <td>{developer.first_name}</td>
        <td>{developer.last_name}</td>
        {chirality === "left" && (
          <td>
            <button className="btn btn-red">{<AiOutlineArrowRight />}</button>
          </td>
        )}
      </tr>
    </>
  );
}
