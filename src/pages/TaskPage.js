// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components

// Page function
export default function DeveloperPage() {
  // Formik to handle forms.
  const formik = useFormik({
    initialValues: {},
  });

  // Page navigation
  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h3 class="text-3xl">Projects</h3>

      <div class="h-16" />

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">Add a Task</legend>

          <label for="description">Task Description</label>
          <input type="text" id="description" name="description" />
          <label for="due_date">Due Date</label>
          <input type="text" id="due_date" name="due_date" />
          <label for="priority">Priority</label>
          <input type="text" id="priority" name="priority" />
          <label for="task_status">Task Status</label>
          <input type="text" id="task_status" name="task_status" />
          <label for="proj_id">Project ID</label>
          <input type="text" id="proj_id" name="proj_id" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-green">Add</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">Update a Task</legend>

          <label for="task_id">Task ID</label>
          <input type="text" id="task_id" name="task_id" />
          <label for="description">Task Description</label>
          <input type="text" id="description" name="description" />
          <label for="due_date">Due Date</label>
          <input type="text" id="due_date" name="due_date" />
          <label for="priority">Priority</label>
          <input type="text" id="priority" name="priority" />
          <label for="task_status">Task Status</label>
          <input type="text" id="task_status" name="task_status" />
          <label for="proj_id">Project ID</label>
          <input type="text" id="proj_id" name="proj_id" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Update</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-red-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Delete a Project
          </legend>

          <label for="task_id">Task ID</label>
          <input type="text" id="task_id" name="task_id" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-red">Delete</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
