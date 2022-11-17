// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

// Import components

// Page function
export default function EditDeveloperPage() {
  const navigate = useNavigate();
  
  const { developer_id } = useParams();

  const [developer, setDeveloper] = useState({});

  async function loadDeveloper(developer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/${developer_id}`);
    const data = response.data;
    const developer = data[0];
    setDeveloper(developer);
  }

  useEffect(() => {
    loadDeveloper(developer_id);
  }, []);

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Edit Developer Details</h1>

      <div class="flex w-2/3 place-self-center">
        <div id="Existing Information" class="p-8 bg-gray-300 mx-auto w-1/2 flex flex-col">
          <h1 class="text-xl text-center">Existing Information</h1>
          <div class="h-12" />
          <table class="text-left">
            <tbody>
              <tr>
                <th>First Name</th>
                <div class="w-24" />
                <td>{developer.first_name}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Last Name</th>
                <div class="w-24" />
                <td>{developer.last_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <div class="w-24" />
                <td>{developer.email}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <div class="w-24" />
                <td>{developer.phone_number}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex-grow" />
          <div class="">
            <button class="btn btn-blue" type="reset" onClick={()=>{navigate("/developers")}}>
              Back
            </button>
          </div>
        </div>
        <div id="Edit Developer Form" class="p-8 bg-gray-300 mx-auto w-1/2">
          <Formik
            enableReinitialize={true}
            initialValues={{
              developer_id: developer_id,
              first_name: developer.first_name,
              last_name: developer.last_name,
              email: developer.email,
              phone_number: developer.phone_number,
              project_id: developer.project_id,
            }}
            values={developer}
            onSubmit={async (values) => {
              const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/developers/update", values)
              if (response.status === 201) {
                navigate("/developers");
              }
            }}
          >
            <Form class="flex flex-col">
              <label for="first_name">First Name</label>
              <Field type="text" id="first_name" name="first_name" />
              <label for="last_name">Last Name</label>
              <Field type="text" id="last_name" name="last_name" />
              <label for="email">Email</label>
              <Field type="text" id="email" name="email" />
              <label for="phone_number">Phone Number</label>
              <Field type="text" id="phone_number" name="phone_number" />
              <label for="project_id">Project ID</label>
              <Field type="text" id="project_id" name="project_id" />

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
