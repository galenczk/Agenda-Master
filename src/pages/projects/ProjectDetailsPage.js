// Import dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Moment handles date formatting.
import Moment from "react-moment";

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

  // Delete function for Tasks
  async function onDeleteTask(task_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/tasks/delete", { task_id });
    if (response.status === 201) {
      loadTasks(project_id);
    }
  }
  // Edit function for Tasks
  async function onEditTask(task_id) {
    navigate(`/edit-task/${task_id}`);
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
      <div class="flex justify-between">
        <div className="flex flex-col mx-4">
          <h2 class="text-3xl m-3">{project.title}</h2>
          <h2 class="text-2xl m-4">{project.description}</h2>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col flex-grow place-items-end mx-4">
          <h2 className="text-2xl m-4">{project.proj_status}</h2>
          <h2 class="text-2xl m-4">
            Due on: <Moment format="MMMM DD, YYYY">{project.delivery_date}</Moment>
          </h2>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <h2 className="text-xl ml-8">Tasks</h2>
        {tasks.length > 0 ? (
          <TaskTableProjectDetails tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ) : (
          <p className="text-center bg-slate-200 px-36 mx-auto my-12">This project does not have any tasks currently.</p>
        )}
        <button
          className="btn btn-green place-self-start m-4 my-6"
          onClick={() => {
            navigate(`/add-task/${project_id}`);
          }}
        >
          Add a Task
        </button>
      </div>

      <div className="flex flex-col mt-4">
        <h2 className="text-xl ml-8">Developers</h2>
        {developers.length > 0 ? (
          <DeveloperTableProjectDetails developers={developers} />
        ) : (
          <p className="text-center bg-slate-200 px-36 mx-auto my-12">
            This project does not have any developers assigned currently.
          </p>
        )}
        <button class="btn btn-green place-self-start m-4" onClick={() => navigate(`/projects/dev-roster/${project_id}`)}>
          Developer Roster
        </button>
      </div>

      <div class="flex-grow" />

      <div class="flex justify-between">
        
        
      </div>
    </>
  );
}
