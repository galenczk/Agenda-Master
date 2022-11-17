// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// Import components
import DeveloperTable from "../../components/developers/DeveloperTable"


// Page function
export default function AllDevelopersPage() {
  const [developers, setDevelopers] = useState([]);
  const navigate = useNavigate()

  async function loadDevelopers() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/developers");
    const developers = response.data;
    setDevelopers(developers);
  }

  useEffect(() => {
    loadDevelopers();
  }, []);

  async function onView(developer_id) {
    navigate(`/developers/${developer_id}`);
  }

  async function onDelete(developer_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/developers/delete", { developer_id });
    if (response.status === 201) {
      loadDevelopers();
    }
  }

  async function onEdit(developer_id) {
    navigate(`/edit-developer/${developer_id}`);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Developers</h1>

      <DeveloperTable developers={developers} onView={onView} onEdit={onEdit} onDelete={onDelete}/>

      <div class="flex-grow" />

      <div id="add and search" class="flex justify-between">
        <button
          class="btn btn-green m-6 place-self-end"
          onClick={() => {
            navigate("/add-developer");
          }}
        >
          Add a New Developer
        </button>
      </div>
    </>
  );
}
