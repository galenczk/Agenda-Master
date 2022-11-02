// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components

// Page function
export default function DeveloperPage() {
  // DOM return
  return (
    <>
      <h3 class="text-3xl p-6">Developers</h3>

      <div id="Results Display Table" class="place-self-center">
        <table class="border-4 mb-6">
          <thead>
            <tr>
              <th class="p-2 bg-slate-200">Developer ID</th>
              <th class="p-2 bg-slate-200">First Name</th>
              <th class="p-2 bg-slate-200">Last Name</th>
              <th class="p-2 bg-slate-200">Email</th>
              <th class="p-2 bg-slate-200">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-1 border-2 text-center">1</td>
              <td class="p-1 border-2">Mark</td>
              <td class="p-1 border-2">Brawn</td>
              <td class="p-1 border-2 text-center">
                mbrawn@keyenergetics.com
              </td>
              <td class="p-1 border-2">1910023476</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="Search Form" class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Search Developers
          </legend>

          <label for="title">Project Title</label>
          <input type="text" id="title" name="title" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Search</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

      <div id="Search Form" class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Assign a Task to a Developer
          </legend>

          <label for="title">Task ID</label>
          <input type="text" id="title" name="title" />
          <label for="title">Developer First Name</label>
          <input type="text" id="title" name="title" />
          <label for="title">Developer Last Name</label>
          <input type="text" id="title" name="title" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Search</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

      <div id="Search Form" class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Award a Certification to a Developer
          </legend>

          <label for="title">Certification Title</label>
          <input type="text" id="title" name="title" />
          <label for="title">Developer First Name</label>
          <input type="text" id="title" name="title" />
          <label for="title">Developer Last Name</label>
          <input type="text" id="title" name="title" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Search</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Add a Developer
          </legend>

          <label for="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" />
          <label for="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <label for="phone_number">Phone Number</label>
          <input type="text" id="phone_number" name="phone_number" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-green">Add</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col ">
          <legend class="text-lg font-bold text-center">
            Update a Developer's Information
          </legend>

          <label for="dev_ID">Developer ID</label>
          <input type="text" id="dev_ID" name="dev_ID" />
          <label for="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" />
          <label for="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <label for="phone_number">Phone Number</label>
          <input type="text" id="phone_number" name="phone_number" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-blue">Update</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

      <div class="p-8 bg-red-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Remove a Developer
          </legend>

          <label for="dev_ID">Developer ID</label>
          <input type="text" id="dev_ID" name="dev_ID" />

          <div class="flex justify-between mt-6">
            <button class="btn btn-red">Delete</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />
    </>
  );
}
