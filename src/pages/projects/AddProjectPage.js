// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components

// Page function
export default function AddProjectPage() {
 


  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Project</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <form class="flex flex-col">

          <label for="projectTitle">Project Title</label>
          <input type="text" id="projectTitle" name="projectTitle" />
          <label for="description">Description</label>
          <input type="text" id="description" name="description" />
          <label for="delivery_date">Delivery Date</label>
          <input type="date" id="deliveryDate" name="deliveryDate" />
          <label for="proj_status">Project Status</label>
          <input type="text" id="projectStatus" name="projectStatus" />
          <label for="customer_id">Customer ID</label>
          <input type="text" id="customerID" name="customerID" />

          <div class="flex justify-between mt-6">
            
            <button class="btn-small btn-gray">Reset</button>
            <button class="btn btn-green">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
