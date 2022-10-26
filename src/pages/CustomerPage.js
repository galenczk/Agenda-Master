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
            Add a Customer
          </legend>

          <label for="company_name">Company Name</label>
          <input type="text" id="company_name" name="company_name" />
          <label for="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" />
          <label for="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" />
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
          <label for="annual_revenue">Annual Revenue</label>
          <input type="text" id="annual_revenue" name="annual_revenue" />

          <div class="flex justify-between mt-6">
            <button>Add</button>
            <button>Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Update a Customer's Information
          </legend>

          <label for="customer_id">Customer ID</label>
          <input type="text" id="customer_id" name="customer_id" />
          <label for="company_name">Company Name</label>
          <input type="text" id="company_name" name="company_name" />
          <label for="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" />
          <label for="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" />
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
          <label for="annual_revenue">Annual Revenue</label>
          <input type="text" id="annual_revenue" name="annual_revenue" />

          <div class="flex justify-between mt-6">
            <button>Update</button>
            <button>Reset</button>
          </div>
        </form>
      </div>

      <div class="h-16" />

      <div class="p-8 bg-red-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Delete a Customer
          </legend>

          <label for="customer_id">Customer ID</label>
          <input type="text" id="customer_id" name="customer_id" />

          <div class="flex justify-between mt-6">
            <button>Delete</button>
            <button>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
