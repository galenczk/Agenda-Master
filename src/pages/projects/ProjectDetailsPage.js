// Import dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Import components
import TaskTableProjectDetails from "../../components/tasks/TaskTableProjectDetails";
import DeveloperTableProjectDetails from "../../components/developers/DeveloperTableProjectDetails";

// Page function
export default function ProjectDetailsPage() {
  const { project_id } = useParams();

  const [project, setProject] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [tasks, setTasks] = useState([]);

  async function loadProject(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/projects/${project_id}`);
    const data = response.data;
    const project = data[0];

    setProject(project);
  }

  async function loadDevelopers(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/for-projects/${project_id}`);
    const data = response.data;

    setDevelopers(data);
  }

  async function loadTasks(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/tasks/for-projects/${project_id}`);
    const data = response.data;

    setTasks(data);
  }

  useEffect(() => {
    loadProject(project_id);
    loadDevelopers(project_id);
    loadTasks(project_id);
  }, []);

  const navigate = useNavigate();

  async function onDelete(project_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/projects/delete", { project_id });
    if (response.status === 201) {
      navigate("/projects");
    }
  }

  // DOM return
  return (
    <>
      <div class="flex flex-col justify-between">
        <div class="flex justify-between">
          <h2 class="text-3xl m-4">{project.title}</h2>
          <div class="w-16" />
          <h2 class="text-2xl m-4">{project.description}</h2>
          <h2 class="text-2xl m-4">{project.delivery_date}</h2>
          <div class="max-w-1/2 flex-grow" />
          <h2 class="text-2xl m-4 mr-12">{project.proj_status}</h2>
        </div>

        <div class="flex">
          <h2 class="text-2xl m-4 mr-12">{project.customer_id}</h2>
        </div>
      </div>

      <div class="h-16" />

      {tasks.length > 0 ? (
        <TaskTableProjectDetails tasks={tasks} />
      ) : (
        <p className="text-center bg-slate-200 px-36 mx-auto">This project does not have any tasks currently.</p>
      )}

      <div class="flex-grow" />

      {developers.length > 0 ? (
        <DeveloperTableProjectDetails developers={developers} />
      ) : (
        <p className="text-center bg-slate-200 px-36 mx-auto">This project does not have any developers currently.</p>
      )}

      <div class="flex-grow" />

      <div class="flex justify-between">
        <button class="btn btn-blue place-self-start m-4" onClick={() => navigate(`/edit-project/${project_id}`)}>
          Edit Project
        </button>
        <button
          class="btn btn-red place-self-start m-4"
          onClick={() => {
            onDelete(project.project_id);
          }}
        >
          Delete Project
        </button>
      </div>
    </>
  );
}
