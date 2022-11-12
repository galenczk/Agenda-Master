import React from "react";
import Certification from "./Certification";

export default function CertificationTable({ certifications, onEdit, onDelete }) {
  return (
    <>
      <table class="border-separate border-spacing-2">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((certification, i) => (
            <Certification certification={certification} key={i} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}
