// Import dependencies
import React from "react";
import { useFormik } from "formik";

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

  const navigate = useNavigate()

  async function onView() {
    navigate(`/developers/1`);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">
        Developers
      </h1>
          
      <DeveloperTable developers={developers} onView={onView} />

      

      <div class="flex-grow" />

<div class="flex justify-between">
  <button class="btn btn-green m-6 place-self-end" onClick={() => {navigate("/add-developer")}}>Add a New Developer</button>


</div>
      
    </>
  );
}
