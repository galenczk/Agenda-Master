// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components

// Page function
export default function AddTaskPage() {
 


  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Certification</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <form class="flex flex-col">
          <label for="first_name">Title </label>
          <input type="text" id="first_name" name="first_name" />
          <label for="last_name">Description</label>
          <input type="text" id="last_name" name="last_name" />
          <label for="email">Duration</label>
          <input type="text" id="email" name="email" />

          <div class="flex justify-between mt-6">
            <button class="btn-small btn-gray">Reset</button>
            <button class="btn btn-green">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
