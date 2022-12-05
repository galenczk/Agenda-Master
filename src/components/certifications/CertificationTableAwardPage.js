import React from "react";
import CertificationAwardPage from "./CertificationAwardPage";

export default function CertificationTable({ certifications, chirality, awardCert, removeCert, developer_id }) {
  return (
    <>
      <table class="border-separate border-spacing-2 w-96">
        <thead>
          <tr>
            {chirality === "right" && <th>Award</th>}
            <th>ID</th>
            <th>Title</th>
            {chirality === "left" && <th>Remove</th>}
          </tr>
        </thead>
        <tbody>
          {certifications.map((certificate, key) => (
            <CertificationAwardPage
              certificate={certificate}
              key={key}
              chirality={chirality}
              awardCert={awardCert}
              removeCert={removeCert}
              developer_id={developer_id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
