// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components

// Page function
export default function DeveloperPage() {
  

  // Page navigation
  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h3 class="text-3xl p-6">Developers</h3>


      <div class="p-8 bg-gray-300">
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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

      <div class="h-16" />

      <div class="p-8 bg-gray-300">
        <form
          class="flex flex-col "
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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

      <div class="h-16" />

      <div class="p-8 bg-red-300">
        <form
          class="flex flex-col"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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
    </>
  );
}
