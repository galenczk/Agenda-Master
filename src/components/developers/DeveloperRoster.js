import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function DeveloperForProjectsPage({ developer, chirality, assignDev, unassignDev, project_id }) {
  // Turn project_id into an integer
  project_id = +project_id;

  return (
    <>
      <tr class="text-center">
        {chirality === "right" && (
          <td>
            <button
              className="btn btn-green"
              onClick={() => {
                assignDev(project_id, developer.developer_id);
              }}
            >
              {<AiOutlineArrowLeft />}
            </button>
          </td>
        )}
        <td>{developer.developer_id}</td>
        <td>{developer.first_name}</td>
        <td>{developer.last_name}</td>
        {chirality === "left" && (
          <td>
            <button
              className="btn btn-red"
              onClick={() => {
                unassignDev(project_id, developer.developer_id);
              }}
            >
              {<AiOutlineArrowRight />}
            </button>
          </td>
        )}
      </tr>
    </>
  );
}
