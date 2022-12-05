import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


export default function Certification({ certificate, chirality, awardCert, removeCert, developer_id }) {
  return (
    <>
      <tr class="text-center">
        {chirality === "right" && (
          <td>
            <button
              className="btn btn-green"
              onClick={() => {
                awardCert(developer_id, certificate.certification_id);
              }}
            >
              {<AiOutlineArrowLeft />}
            </button>
          </td>
        )}
        <td>{certificate.certification_id}</td>
        <td>{certificate.title}</td>
        {chirality === "left" && (
          <td>
            <button
              className="btn btn-red"
              onClick={() => {
                removeCert(developer_id, certificate.certification_id);
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
