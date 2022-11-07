// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components
import Navigation from "../../components/Navigation";

import TaskTable from "../../components/TaskTable";
import DevTable from "../../components/DevTable";

// Page function
export default function ProjectDetailsPage({ projectID }) {
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

  const devs = [
    {
      first_name: "Mark",
      last_name: "Brawn",
      email: "mbrawn@keyenergetics.com",
      phone_number: "1910023476",
    },
    {
      first_name: "Gordon",
      last_name: "Freeman",
      email: "mbrawn@keyenergetics.com",
      phone_number: "1910023476",
    },
    {
      first_name: "Joe",
      last_name: "Dev",
      email: "mbrawn@keyenergetics.com",
      phone_number: "1910023476",
    },
  ];

  const navigate = useNavigate()

  const onEdit = () => {
    // Pop a modal for editing form.
  };

  const onDelete = () => {
    // Pop a confirmation before delete.
  };

  // DOM return
  return (
    <>
      <div class="flex justify-between">
        <h2 class="text-3xl m-4">[Project Title]</h2>
        <div class="flex">
          <h2 class="text-2xl m-4 mr-12">[status]</h2>
          <h2 class="text-2xl m-4 mr-12">[dueDate]</h2>
        </div>
      </div>

      <div class="bg-slate-200 flex flex-col p-8">
        <h2 class="text-2xl mb-4">Tasks</h2>
        <TaskTable tasks={tasks} />
        <button class="btn btn-green m-6 place-self-start">Add Task</button>
      </div>

      <div class="h-16"/>

      <div class="flex flex-col p-8">
        <h2 class="text-2xl mb-4">Developers</h2>
        <DevTable devs={devs} button={"Remove"} />
        <button class="btn btn-green m-6 place-self-start">Assign Developer</button>
      </div>

      <div class="flex-grow" />

      <div>
        <h2 class="text-xl m-4">[customer information]</h2>
      </div>

      <div class="flex justify-between">
        <button class="btn btn-blue m-6" onClick={() => navigate("/edit-project")}>Edit Project</button>

        <button class="btn btn-red m-6">Delete Project</button>
      </div>
    </>
  );
}
