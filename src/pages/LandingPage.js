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
        <h1 class="text-3xl mt-16">Welcome to our Project Management Tool</h1>
        <h2 class="mt-6">
          Please use the navigation bar above to explore the pages of our
          application.
        </h2>

        <div class="flex mt-10 justify-between">
          <div class="text-left px-6 py-4 bg-slate-200">
            <h3 class="mb-4 font-bold">Projects Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Project table in the
              company's database.
              <br />
              <br />
              The Add Project form may be used to add a new project and
              associate it with an existing customer.
              <br />
              <br />
              The Update Project form takes in the primary key (project_id) of
              an existing project and allows a user to update this project's
              attributes.
              <br />
              <br />
              The Delete Project form takes in the primary key (project_id) of
              an existing project and deletes this project.
            </p>
          </div>

          <div class="text-left px-6 py-4 ">
            <h3 class="mb-4 font-bold">Developers Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Developer table in
              the company's database.
              <br />
              <br />
              The Add Developer form may be used to add a newly hired developer
              to the company.
              <br />
              <br />
              The Update Developer form takes in the primary key (developer_id)
              of a developer and allows a user to update this developer's
              information.
              <br />
              <br />
              The Delete Project form takes in the primary key (developer_id)
              of a developer removes them from the company database.
            </p>
          </div>

          <div class="text-left px-6 py-4 bg-slate-200">
            <h3 class="mb-4 font-bold">Tasks Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Tasks table in the
              company's database.
              <br />
              <br />
              The Add Task form may be used to add a new task and associate it
              with an existing project.
              <br />
              <br />
              The Update Task form takes in the primary key (task_id) of a task
              and allows a user to update attributes of this task.
              <br />
              <br />
              The Delete Task form takes in the primary key (task_id) of a task
              and deletes it.
            </p>
          </div>

          <div class="text-left px-6 py-4">
            <h3 class="mb-4 font-bold">Customers Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Customers table in
              the company's database.
              <br />
              <br />
              The Add Customer form may be used to add a newly signed customer
              to our growing list.
              <br />
              <br />
              The Update Customer form takes in the primary key (customer_id)
              of an existing customer and allows a user to update this
              customer's information.
              <br />
              <br />
              The Delete Customer form takes in the primary key (customer_id)
              of an existing customer and removes them from the database.
            </p>
          </div>

          <div class="text-left px-6 py-4 bg-slate-200">
            <h3 class="mb-4 font-bold">Certifications Page</h3>
            <p class="leading-relaxed">
              This page allows a user to interact with the Certifications table
              in the company's database.
              <br />
              <br />
              The Add Certification form may be used to add a new certification
              to the database.
              <br />
              <br />
              The Update Certification form takes in the primary key
              (certification_id) of a certification in the database and allows
              a user to change its attributes.
              <br />
              <br />
              The Delete Certification form takes in the primary key
              (certification_id) of an existing certification and deletes it
              from the database.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
