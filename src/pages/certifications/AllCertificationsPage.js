// Import dependencies
import React from "react";

// Import components
import CertificationTable from "../../components/certifications/CertificationTable";
import { useNavigate } from "react-router-dom";

const certifications = [
  {
    certfication_id: 1,
    title: "CEH",
    description: "Certified Ethical Hacker",
    duration: "3 years",
  },
];

export default function AllTasksPage() {
  const navigate = useNavigate();

  async function onEdit() {
    navigate(`/edit-certification/1`);
  }
  async function onDelete() {

  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Certifications</h1>

      <CertificationTable certifications={certifications} onEdit={onEdit} onDelete={onDelete} />

      <div class="flex-grow" />

      <div class="flex justify-between">
        <button
          class="btn btn-green m-6 place-self-end"
          onClick={() => {
            navigate("/add-certification");
          }}
        >
          Add a New Task
        </button>
      </div>
    </>
  );
}
