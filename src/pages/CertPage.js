// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components

// Page function
export default function CertPage() {
  const formik = useFormik({
    initialValues: {
      projectTitle: "",
      description: "",
      deliveryDate: "",
      projectStatus: "",
      customerID: "",
      projectID: "",
    },
  });

  function resetForm() {
    formik.resetForm();
  }

  // DOM return
  return (
    <>
      <h3 class="text-3xl p-6">Certifications</h3>
      <div id="Search Display Table" class="place-self-center">
        <table class="border-4 mb-6">
          <thead>
            <tr>
              <th class="p-2 bg-slate-200">Project ID</th>
              <th class="p-2 bg-slate-200">Title</th>
              <th class="p-2 bg-slate-200">Description</th>
              <th class="p-2 bg-slate-200">Delivery Date</th>
              <th class="p-2 bg-slate-200">Status</th>
              <th class="p-2 bg-slate-200">Customer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-1 border-2 text-center">1</td>
              <td class="p-1 border-2">Excavation Log</td>
              <td class="p-1 border-2">Archaeological mapping service</td>
              <td class="p-1 border-2 text-center">2023-10-02</td>
              <td class="p-1 border-2">In Progress</td>
              <td class="p-1 border-2 text-center">4</td>
            </tr>
            <tr>
              <td class="p-1 border-2 text-center">2</td>
              <td class="p-1 border-2">Fingerprint Recognition Banking</td>
              <td class="p-1 border-2">
                Fingerprint account access restriction
              </td>
              <td class="p-1 border-2 text-center">2024-08-01</td>
              <td class="p-1 border-2">In Progress</td>
              <td class="p-1 border-2 text-center">2</td>
            </tr>
            <tr>
              <td class="p-1 border-2 text-center">3</td>
              <td class="p-1 border-2">Grocery Budget Tracker</td>
              <td class="p-1 border-2">Grocery shopping budget app</td>
              <td class="p-1 border-2 text-center">2022-12-09</td>
              <td class="p-1 border-2">Completed</td>
              <td class="p-1 border-2 text-center">5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="Search Form" class="p-8 bg-gray-300">
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
            resetForm();
          }}
        >
          <legend class="text-lg font-bold text-center">
            Search Projects
          </legend>

          <label for="title">Project Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Search for Projects"
            onChance={formik.handleChange}
            value={formik.values.projectTitle}
          />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Search</button>
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
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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
