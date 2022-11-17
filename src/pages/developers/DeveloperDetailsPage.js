// Import dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Import components
import DeveloperTable from "../../components/developers/DeveloperTable";
import TaskTableProjectDetails from "../../components/tasks/TaskTableProjectDetails";
import CertificationTableDeveloperDetails from "../../components/certifications/CertificationTableDeveloperDetails";

// Page function
export default function DeveloperDetailsPage() {
  const { developer_id } = useParams();

  const [developer, setDeveloper] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [certifications, setCertifications] = useState([]);

  async function loadDeveloper(customer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/${developer_id}`);
    const data = response.data;
    const developer = data[0];

    setDeveloper(developer);
  }

  async function loadTasks(developer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/tasks/for-developers/${developer_id}`);
    const data = response.data;
    console.log(data);

    setTasks(data);
  }
  async function loadCertifications(developer_id) {
    const response = await axios.get(
      `http://flip2.engr.oregonstate.edu:33522/certifications/for-developers/${developer_id}`
    );
    const data = response.data;
    console.log(data);

    setCertifications(data);
  }

  useEffect(() => {
    loadDeveloper(developer_id);
    loadTasks(developer_id);
    loadCertifications(developer_id);
  }, []);

  const navigate = useNavigate();

  async function onDelete(customer_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/developers/delete", { developer_id });
    if (response.status === 201) {
      navigate("/developers");
    }
  }

  // DOM return
  return (
    <>
      <div class="flex flex-col justify-between">
        <div class="flex justify-between">
          <h2 class="text-3xl m-4">{developer.first_name}</h2>
          <div class="w-16" />
          <h2 class="text-2xl m-4">{developer.last_name}</h2>
          <h2 class="text-2xl m-4">{developer.email}</h2>
          <div class="max-w-1/2 flex-grow" />
          <h2 class="text-2xl m-4 mr-12">${developer.phone_number}</h2>
        </div>

        <div class="flex">
          <h2 class="text-2xl m-4 mr-12">{developer.project_id}</h2>
        </div>
      </div>

      <div class="h-16" />

      {tasks.length > 0 ? (
        <TaskTableProjectDetails tasks={tasks} onOpen={() => navigate("/project")} />
      ) : (
        <p className="text-center bg-slate-200 px-36 mx-auto">
          This developer has no tasks assigned to them currently.
        </p>
      )}

      <div class="flex-grow" />

      {certifications.length > 0 ? (
        <CertificationTableDeveloperDetails certifications={certifications} onOpen={() => navigate("/project")} />
      ) : (
        <p className="text-center bg-slate-200 px-36 mx-auto">This developer holds no certifications currently.</p>
      )}

      <div class="flex-grow" />

      <div class="flex justify-between">
        <button class="btn btn-blue place-self-start m-4" onClick={() => navigate(`/edit-developer/${developer_id}`)}>
          Edit Developer
        </button>
        <button
          class="btn btn-red place-self-start m-4"
          onClick={() => {
            onDelete(developer.developer_id);
          }}
        >
          Delete Developer
        </button>
      </div>
    </>
  );
}
