// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components
import Navigation from "../../components/Navigation"
import ProjectTable from "../../components/ProjectTable"
import { useNavigate } from "react-router-dom";
// Page function
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

export default function AllProjectsPage() {

   const navigate = useNavigate()

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">
        Projects
      </h1>
          
      <ProjectTable projects={projects} onOpen={() => navigate("/project")} />

      

      <div class="flex-grow" />

<div class="flex justify-between">
  <button class="btn btn-green m-6 place-self-end" onClick={() => {navigate("/add-project")}}>Create a New Project</button>

  <div id="Search Form" class="p-4 bg-gray-200 w-1/2 m-6">
        <form class="flex flex-col">
          <legend class="text-lg font-bold">
            Search Projects
          </legend>

          <div class="flex">
            <div class="flex flex-col flex-grow">
              <div class="flex-grow"/>
              <label for="title">Project Title</label>
              <input type="text" id="title" name="title" />
              <label for="title">Delivery Date</label>
              <input type="text" id="title" name="title" />
              <div class="flex-grow"/>
            </div>

            <div class="w-6"/>
            
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
