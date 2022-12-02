// Import dependencies
import React from "react";
import { useFormik } from "formik";

// Import components

// Page function
export default function CustomerPage() {



  // DOM return
  return (
    <>
      <h3 class="text-3xl p-6">Customers</h3>
      <div id="Search Display Table" class="place-self-center">
        <table class="border-4 mb-6">
          <thead>
            <tr>
              <th class="p-2 bg-slate-200">Customer ID</th>
              <th class="p-2 bg-slate-200">Company Name</th>
              <th class="p-2 bg-slate-200">First Name</th>
              <th class="p-2 bg-slate-200">Last Name</th>
              <th class="p-2 bg-slate-200">Email</th>
              <th class="p-2 bg-slate-200">Annual Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-1 border-2 text-center">1</td>
              <td class="p-1 border-2">Carrera Terra</td>
              <td class="p-1 border-2">John</td>
              <td class="p-1 border-2 text-center">Carrera</td>
              <td class="p-1 border-2">jcarrera@carreraterra.com</td>
              <td class="p-1 border-2 text-center">$8200000.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="Search Form" class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Search Customers
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

      <div class="p-8 bg-gray-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">Add a Customer</legend>

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
            <button class="btn btn-green">Add</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

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
            <button class="btn btn-blue">Update</button>
            <button class="btn btn-gray">Reset</button>
          </div>
        </form>
      </div>

      <div class="h-8" />

      <div class="p-8 bg-red-300">
        <form class="flex flex-col">
          <legend class="text-lg font-bold text-center">
            Delete a Customer
          </legend>

          <label for="customer_id">Customer ID</label>
          <input type="text" id="customer_id" name="customer_id" />

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
