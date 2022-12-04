// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// Import components
import ProjectTable from "../../components/projects/ProjectTable";

// Page function
export default function AllProjectsPage() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  async function loadProjects() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/projects");
    const projects = response.data;
    setProjects(projects);
  }

  useEffect(() => {
    loadProjects();

  }, []);

  async function onView(project_id) {
    navigate(`/projects/${project_id}`);
  }

  async function onDelete(project_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/projects/delete", { project_id });
    if (response.status === 201) {
      loadProjects();
    }
  }

  async function onEdit(project_id) {
    navigate(`/edit-project/${project_id}`);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Projects</h1>

      <ProjectTable projects={projects} onView={onView} onEdit={onEdit} onDelete={onDelete} />

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
