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

        <div class="flex mt-20 justify-evenly">
          <div class="text-left px-6 py-4 bg-slate-200 ">
            <h3 class="mb-4 font-bold text-center">Projects Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Project table in the company's database.
              <br />
              <br />
              The <b className="bg-emerald-700 text-white">Manage Project</b> button allows a user to manage a Project's
              relationships with Developers and Tasks.
            </p>
          </div>

          <div class="text-left px-6 py-4 ">
            <h3 class="mb-4 font-bold text-center">Customers Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Customers table in the company's database.
            </p>
          </div>

          <div class="text-left px-6 py-4 bg-slate-200 ">
            <h3 class="mb-4 font-bold text-center">Developers Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Developer table in the company's database.
              <br />
              <br />
              The <b className="bg-emerald-700 text-white">Certifications</b> button allows a user to interact with the
              intersection table <b>Developer_has_Certifications</b> that manages the relationships between Developers
              and Certifications.
            </p>
          </div>

          <div class="text-left px-6 py-4 ">
            <h3 class="mb-4 font-bold text-center">Tasks Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Tasks table in the company's database.
              <br />
              <br />
              The <b className="bg-black text-white">Filter Tasks</b> form allows a user to filter the Tasks list by
              Project.
            </p>
          </div>

          <div class="text-left px-6 py-4 bg-slate-200 ">
            <h3 class="mb-4 font-bold text-center">Certifications Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Certifications table in the company's database.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
