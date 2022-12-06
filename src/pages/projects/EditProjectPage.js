// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

export default function EditProjectPage() {
  const navigate = useNavigate();

  const { project_id } = useParams();

  const [project, setProject] = useState({});
  const [customers, setCustomers] = useState([]);

  async function loadProject(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/projects/${project_id}`);
    const data = response.data;
    const project = data[0];
    setProject(project);
  }

  async function loadCustomers() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/customers");
    const customers = response.data;
    setCustomers(customers);
  }

  useEffect(() => {
    loadCustomers();
    loadProject(project_id);
  }, []);

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Edit Project Details</h1>

      <div class="flex w-2/3 place-self-center">
        <div id="Existing Information" class="p-8 bg-gray-300 mx-auto w-1/2 flex flex-col">
          <h1 class="text-xl text-center">Existing Information</h1>
          <div class="h-12" />
          <table class="text-left">
            <tbody>
              <tr>
                <th>Title</th>
                <div class="w-24" />
                <td>{project.title}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Description</th>
                <div class="w-24" />
                <td>{project.description}</td>
              </tr>
              <tr>
                <th>Delivery Date</th>
                <div class="w-24" />
                <td>{project.delivery_date}</td>
              </tr>
              <tr>
                <th>Customer_ID</th>
                <div class="w-24" />
                <td>{project.customer_id}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex-grow" />
          <div class="">
            <button
              class="btn btn-blue"
              type="reset"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div id="Edit Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
          <Formik
            enableReinitialize={true}
            initialValues={{
              project_id: project.project_id,
              title: project.title,
              description: project.description,
              delivery_date: project.delivery_date,
              proj_status: null,
              customer_id: project.customer_id,
            }}
            values={project}
            onSubmit={async (values) => {
              const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/projects/update", values);
              if (response.status === 201) {
                navigate("/projects");
              }
            }}
          >
            <Form class="flex flex-col">
              <label for="title">Title</label>
              <Field type="text" id="title" name="title" />
              <label for="description">Description</label>
              <Field type="text" id="description" name="description" />
              <label for="delivery_date">Delivery Date</label>
              <Field type="date" id="delivery_date" name="delivery_date" />
              <label for="proj_status">Project Status</label>
              <Field as="select" id="proj_status" name="proj_status">
                <option value=""> - </option>
                <option value="Awaiting Customer Approval">Awaiting Customer Approval</option>
                <option value="In Progress">In Progress</option>
                <option value="Delivered">Delivered</option>
              </Field>
              <label for="customer_id">Customer ID</label>
              <Field as="select" id="customer_id" name="customer_id">
                <option value=""> - </option>
                {customers.map((item, key) => {
                  return (
                    <option key={key + 1} value={item.customer_id}>
                      {item.company_name}
                    </option>
                  );
                })}
              </Field>

              <div class="flex justify-between mt-6">
                <button class="btn-small btn-gray" type="reset">
                  Reset
                </button>
                <button class="btn btn-green" type="submit">
                  Update
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
