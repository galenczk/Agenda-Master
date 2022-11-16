// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// Import components
import Navigation from "../../components/Navigation";
import ProjectTable from "../../components/projects/ProjectTable";
import { useNavigate } from "react-router-dom";

// Page function
const projects = [
  {
    project_id: 1,
    title: "Excavation Log",
    description: "Archaeological mapping service requested by Carrera Terra.",
    delivery_date: "2023-10-02",
    proj_status: "In progress",
    customer: 4,
    devs_assigned: 10,
    tasks_open: 6,
  },
  {
    project_id: 2,

    title: "Fingerprint Recognition Banking",
    description: "Fingerprint account access restriction requested by Scoutain Bank.",
    delivery_date: "2024-08-01",
    proj_status: "In progress",
    customer: 2,
    devs_assigned: 10,
    tasks_open: 6,
  },
  {
    project_id: 3,

    title: "Grocery Budget Tracker",
    description: "Grocery shopping budget app requested by Aria Apron.",
    delivery_date: "2022-12-09",
    proj_status: "Completed",
    customer: 5,
    devs_assigned: 10,
    tasks_open: 6,
  },
  {
    project_id: 4,

    title: "Weather Forecasting App",
    description: "Meteorology tracking app requested by Meteorology Mobile.",
    delivery_date: "2025-09-02",
    proj_status: "On hold",
    customer: 3,
    devs_assigned: 10,
    tasks_open: 6,
  },
  {
    project_id: 5,

    title: "Taco Time",
    description: "Taco sale mapping app for regional taco deals requested by Taco Time.",
    delivery_date: "2022-07-10",
    proj_status: "In progress",
    customer: 1,
    devs_assigned: 10,
    tasks_open: 6,
  },
];

export default function AllProjectsPage() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/projects");
    const projects = response.data;
    setProjects(projects);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function onView(title) {
    navigate(`/customers/${title}`);
  }

  async function onDelete(title) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/projects/delete", { title });
    if (response.status === 201) {
      loadProjects();
    }
  }

  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Projects</h1>

      <ProjectTable projects={projects} onView={onView} />

      <div class="flex-grow" />

      <div id="add and search" class="flex justify-between">
        <button
          class="btn btn-green m-6 place-self-end"
          onClick={() => {
            navigate("/add-project");
          }}
        >
          Add a New Project
        </button>
      </div>
    </>
  );
}
