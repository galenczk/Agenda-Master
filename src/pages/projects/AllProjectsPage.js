// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components
import Navigation from "../../components/Navigation";
import ProjectTable from "../../components/ProjectTable";
import { useNavigate } from "react-router-dom";
// Page function
const projects = [
  {
    title: "Excavation Log",
    description: "Archaeological mapping service requested by Carrera Terra.",
    deliveryDate: "2023-10-02",
    status: "In progress",
    customer: 4,
  },
  {
    title: "Fingerprint Recognition Banking",
    description: "Fingerprint account access restriction requested by Scoutain Bank.",
    deliveryDate: "2024-08-01",
    status: "In progress",
    customer: 2,
  },
  {
    title: "Grocery Budget Tracker",
    description: "Grocery shopping budget app requested by Aria Apron.",
    deliveryDate: "2022-12-09",
    status: "Completed",
    customer: 5,
  },
  {
    title: "Weather Forecasting App",
    description: "Meteorology tracking app requested by Meteorology Mobile.",
    deliveryDate: "2025-09-02",
    status: "On hold",
    customer: 3,
  },
  {
    title: "Taco Time",
    description: "Taco sale mapping app for regional taco deals requested by Taco Time.",
    deliveryDate: "2022-07-10",
    status: "In progress",
    customer: 1,
  },
];

export default function AllProjectsPage() {
  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Projects</h1>

      <ProjectTable projects={projects} onOpen={() => navigate("/project")} />

      <div class="flex-grow" />

      <div class="flex justify-between">
        <button
          class="btn btn-green m-6 place-self-end"
          onClick={() => {
            navigate("/add-project");
          }}
        >
          Create a New Project
        </button>

        <div id="Search Form" class="p-4 bg-gray-200 w-1/2 m-6">
          <form class="flex flex-col">
            <legend class="text-lg font-bold">Search Projects</legend>

            <div class="flex">
              <div class="flex flex-col flex-grow">
                <div class="flex-grow" />
                <label for="title">Project Title</label>
                <input type="text" id="title" name="title" />
                <label for="title">Delivery Date</label>
                <input type="text" id="title" name="title" />
                <div class="flex-grow" />
              </div>

              <div class="w-6" />

              <div class="flex flex-col flex-grow">
                <label for="title">Status</label>
                <input type="text" id="title" name="title" />
                <label for="title">Customer</label>
                <input type="text" id="title" name="title" />
                <label for="title">Project ID</label>
                <input type="text" id="title" name="title" />
              </div>
            </div>

            <div class="flex justify-between mt-6">
              <button class="btn-small btn-gray">Reset</button>
              <button class="btn btn-blue">Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
