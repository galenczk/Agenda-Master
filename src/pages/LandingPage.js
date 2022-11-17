// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components

// Page function
export default function LandingPage() {
  // Page navigation
  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <div class="text-center flex-grow">
        <h1 class="text-3xl mt-16">Welcome to Agenda Master - The Database Management Tool by Key Energetics</h1>
        <h2 class="mt-6">Please use the navigation bar above to explore the pages of our application.</h2>

        <div class="flex mt-10 justify-between">
          <div class="text-left px-6 py-4 bg-slate-200">
            <h3 class="mb-4 font-bold">Projects Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Project table in the company's database.
              <br />
              <br />
              The "Add a New Project" button will allow a user to add an entry to the table. We have left some
              default values in this form to make testing easy. Feel free to change these to match your needs!
              <br />
              <br />
              The blue button on the right of each table entry allows a user to edit that table entry.
              <br />
              <br />
              The red button allows a user to delete this table entry.
              <br />
              <br />
              The "View" button does not function at this time, but will allow a user to view additional details
              regarding the table entry.
            </p>
          </div>

          <div class="text-left px-6 py-4">
            <h3 class="mb-4 font-bold">Customers Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Customers table in the company's database.
              <br />
              <br />
              The "Add a New Customer" button will allow a user to add an entry to the table. We have left some
              default values in this form to make testing easy. Feel free to change these to match your needs!
              <br />
              <br />
              The blue button on the right of each table entry allows a user to edit that table entry.
              <br />
              <br />
              The red button allows a user to delete this table entry.
              <br />
              <br />
              The "View" button allows a user to view additional details regarding the table entry.
            </p>
          </div>

          <div class="text-left px-6 py-4 ">
            <h3 class="mb-4 font-bold">Developers Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Developer table in the company's database.
              <br />
              <br />
              The "Add a New Developer" button will allow a user to add an entry to the table. We have left some
              default values in this form to make testing easy. Feel free to change these to match your needs!
              <br />
              <br />
              The blue button on the right of each table entry allows a user to edit that table entry.
              <br />
              <br />
              The red button allows a user to delete this table entry.
              <br />
              <br />
              The "View" button does not function at this time, but will allow a user to view additional details
              regarding the table entry.
            </p>
          </div>

          <div class="text-left px-6 py-4 bg-slate-200">
            <h3 class="mb-4 font-bold">Tasks Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Tasks table in the company's database.
              <br />
              <br />
              The "Add a New Project" button will allow a user to add an entry to the table. We have left some
              default values in this form to make testing easy. Feel free to change these to match your needs!
              <br />
              <br />
              The blue button on the right of each table entry allows a user to edit that table entry.
              <br />
              <br />
              The red button allows a user to delete this table entry.
              <br />
              <br />
              The "View" button does not function at this time, but will allow a user to view additional details
              regarding the table entry.
            </p>
          </div>

          <div class="text-left px-6 py-4 bg-slate-200">
            <h3 class="mb-4 font-bold">Certifications Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Certifications table in the company's database.
              <br />
              <br />
              The "Add a New Project" button will allow a user to add an entry to the table. We have left some
              default values in this form to make testing easy. Feel free to change these to match your needs!
              <br />
              <br />
              The blue button on the right of each table entry allows a user to edit that table entry.
              <br />
              <br />
              The red button allows a user to delete this table entry.
              <br />
              <br />
              The "View" button does not function at this time, but will allow a user to view additional details
              regarding the table entry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
