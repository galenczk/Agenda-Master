// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


// Import components
import Navigation from "../../components/Navigation";
import ProjectTable from "../../components/ProjectTable"
import TaskTable from "../../components/TaskTable";
import DevTable from "../../components/DevTable";

// Page function
export default function CustomerDetailsPage({ customerID }) {

  const navigate = useNavigate()

   const projects = [
    {
      title: "Key Energetics",
      description: "Agenda Master",
      deliveryDate: "Now",
      status: "Done",
      customer: "The King",
    },
    {
      title: "Key Energetics",
      description: "Agenda Master",
      deliveryDate: "Now",
      status: "Done",
      customer: "The King",
    },
    {
      title: "Key Energetics",
      description: "Agenda Master",
      deliveryDate: "Now",
      status: "Done",
      customer: "The King",
    },
  ];

  const onDelete = () => {
    // Pop a confirmation before delete.
  };

  // DOM return
  return (
    <>
      <div class="flex flex-col justify-between">
        <div class="flex justify-between">
          <h2 class="text-3xl m-4">[Company]</h2>
          <div class="w-16" />
          <h2 class="text-2xl m-4">[First Name]</h2>
          <h2 class="text-2xl m-4">[Last Name]</h2>
          <div class="max-w-1/2 flex-grow" />
          <h2 class="text-2xl m-4 mr-12">[annual revenue]</h2>
        </div>
        
        <div class="flex">
          <h2 class="text-2xl m-4 mr-12">[phone number]</h2>
          <h2 class="text-2xl m-4 mr-12">[email]</h2>
        </div>
      </div>


      <div class="h-16" />

      <ProjectTable projects={projects} onOpen={() => navigate("/project")} />

      <div class="flex-grow"/>

      <div class="flex justify-between">
        <button class="btn btn-blue place-self-start m-4" onClick={() => navigate("/edit-customer")}>Edit Customer</button>
        <button class="btn btn-red place-self-start m-4" onClick={() => {}}>Delete Customer</button>
      </div>
      

    </>
  );
}
