// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components
import Navigation from "../../components/Navigation";

import TaskTable from "../../components/TaskTable";
import CertificationTable from "../../components/CertificationTable";

// Page function
export default function DeveloperDetailsPage() {
  const tasks = [
    {
      description: "Make UI",
      dueDate: "2022-10-19",
      priority: "2",
      status: "In Progress",
    },
    {
      description: "Make Backend",
      dueDate: "2022-10-19",
      priority: "2",
      status: "In Progress",
    },
    {
      description: "Integrate FE and BE",
      dueDate: "2022-10-19",
      priority: "2",
      status: "In Progress",
    },
  ];

  const certifications = [
    {
      certification_id: "1",
      title: "Certified Information Systems Security Professional",
      description: "Required to work on government projects.",
      duration: "3 years",
    },
  ];

  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <div class="flex justify-between">
        <h2 class="text-3xl m-4 mt-10">[first_name, last_name]</h2>
        <div class="flex flex-col">
          <h2 class="text-2xl m-4">[email]</h2>
          <h2 class="text-2xl m-4 ">[phone_number]</h2>
        </div>
      </div>

      <div class="bg-slate-200 flex flex-col p-8">
        <h2 class="text-2xl mb-4">Tasks Assigned to [first_name]</h2>
        <TaskTable tasks={tasks} />
        <button class="btn btn-blue m-6 place-self-start">Tasks Table</button>
      </div>

      <div class="h-16" />

      <div class="flex flex-col p-8">
        <h2 class="text-2xl mb-4">Certifications Held by [first_name]</h2>
        <CertificationTable certifications={certifications} button={"Remove"} />
        <button class="btn btn-green m-6 place-self-start">Award a New Certificaiton</button>
      </div>

      <div class="flex-grow" />

      <div class="flex justify-between">
        <button class="btn btn-blue m-6" onClick={() => navigate("/edit-project")}>
          Edit Developer Details
        </button>

        <button class="btn btn-red m-6">Delete Developer</button>
      </div>
    </>
  );
}
