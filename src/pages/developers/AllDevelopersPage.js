// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// Import components
import Navigation from "../../components/Navigation"
import DeveloperTable from "../../components/developers/DeveloperTable"
import { useNavigate } from "react-router-dom";


// Page function
  const developers = [
    {
      developer_id: 1,
      first_name: "Mark",
      last_name: "Brawn",
      email: "mbrawn@keyenergetics.com",
      phone_number: "1910023476",
      project_id: 1,
    },
    {
      developer_id: 2,
      first_name: "Kyle",
      last_name: "Chang",
      email: "kchang@keyenergetics.com",
      phone_number: "1912413589",
      project_id: 3,
    },
    {
      developer_id: 3,
      first_name: "Miranda",
      last_name: "Turani",
      email: "mturani@keyenergetics.com",
      phone_number: "1919078113",
      project_id: "NULL",
    },
    {
      developer_id: 4,
      first_name: "Jay",
      last_name: "Singh",
      email: "jsingh@keyenergetics.com",
      phone_number: "1918129420",
      project_id: 4,
    },
    {
      developer_id: 5,
      first_name: "Serenity",
      last_name: "Diaz",
      email: "sdiazi@keyenergetics.com",
      phone_number: "1910015678",
      project_id: 3,
    },
  ];

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

  async function onEdit() {
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
