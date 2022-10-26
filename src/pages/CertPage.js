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
          <legend class="text-lg font-bold text-center">
            Add a Certification
          </legend>

          <label for="title">Certification Title</label>
          <input type="text" id="title" name="title" />
          <label for="description">Certification Description</label>
          <input type="text" id="description" name="description" />
          <label for="duration">Duration</label>
          <input type="text" id="duration" name="duration" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-green">Add</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Update a Certification
          </legend>

          <label for="cert_id">Certification ID</label>
          <input type="text" id="cert_id" name="cert_id" />
          <label for="title">Certification Title</label>
          <input type="text" id="title" name="title" />
          <label for="description">Certification Description</label>
          <input type="text" id="description" name="description" />
          <label for="duration">Duration</label>
          <input type="text" id="duration" name="duration" />

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
            Delete a Certification
          </legend>

          <label for="proj_ID">Project ID</label>
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
