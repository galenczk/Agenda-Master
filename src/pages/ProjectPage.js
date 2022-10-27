// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components

// Page function
export default function ProjectPage() {
  
  // Page navigation
  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h3 class="text-3xl p-6">Projects</h3>


      <div class="p-8 bg-gray-300">
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <legend class="text-lg font-bold text-center">Add a Project</legend>

          <label for="title">Project Title</label>
          <input type="text" id="title" name="title" />
          <label for="description">Description</label>
          <input type="text" id="description" name="description" />
          <label for="delivery_date">Delivery Date</label>
          <input type="date" id="delivery_date" name="delivery_date" />
          <label for="proj_status">Project Status</label>
          <input type="text" id="proj_status" name="proj_status" />
          <label for="customer_id">Customer ID</label>
          <input type="text" id="customer_id" name="customer_id" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-green">Add</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-gray-300">
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <legend class="text-lg font-bold text-center">
            Update a Project
          </legend>

          <label for="proj_id">Project ID</label>
          <input type="text" id="proj_id" name="proj_id" />
          <label for="title">Project Title</label>
          <input type="text" id="title" name="title" />
          <label for="description">Description</label>
          <input type="text" id="description" name="description" />
          <label for="delivery_date">Delivery Date</label>
          <input type="date" id="delivery_date" name="delivery_date" />
          <label for="proj_status">Project Status</label>
          <input type="text" id="proj_status" name="proj_status" />
          <label for="customer_id">Customer ID</label>
          <input type="text" id="customer_id" name="customer_id" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Update</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-red-300">
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <legend class="text-lg font-bold text-center">
            Delete a Project
          </legend>

          <label for="proj_id">Project ID</label>
          <input type="text" id="proj_ID" name="proj_ID" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-red">Delete</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
