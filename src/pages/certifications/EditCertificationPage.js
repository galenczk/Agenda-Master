// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

// Import components

// Page function
export default function EditCertificationPage() {
  const navigate = useNavigate();
  
  const { certification_id } = useParams();

  const [certification, setCertification] = useState({});

  async function loadCertification(certification_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/certifications/${[certification_id]}`);
    const data = response.data;
    const certification = data[0];
    setCertification(certification);
  }

  useEffect(() => {
    loadCertification(certification_id);
  }, []);

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Edit Certification Details</h1>

      <div class="flex w-2/3 place-self-center">
        <div id="Existing Information" class="p-8 bg-gray-300 mx-auto w-1/2 flex flex-col">
          <h1 class="text-xl text-center">Existing Information</h1>
          <div class="h-12" />
          <table class="text-left">
            <tbody>
              <tr>
                <th>Title</th>
                <div class="w-24" />
                <td>{certification.title}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Description</th>
                <div class="w-24" />
                <td>{certification.description}</td>
              </tr>
              <tr>
                <th>Duration</th>
                <div class="w-24" />
                <td>{certification.duration}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex-grow" />
          <div class="">
            <button
              class="btn btn-blue"
              type="reset"
              onClick={() => {
                navigate("/certifications");
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div id="Edit Certification Form" class="p-8 bg-gray-300 mx-auto w-1/2">
          <Formik
            enableReinitialize={true}
            initialValues={{
              certification_id: certification.certification_id,
              title: certification.title,
              description: certification.description,
              duration: certification.duration,
            }}
            values={certification}
            onSubmit={async (values) => {
              const response = axios.post("http://flip2.engr.oregonstate.edu:33522/certifications/update", values);
              if ((await response).status === 201) {
                navigate("/certifications");
              }
            }}
          >
            <Form class="flex flex-col">
              <legend class="text-xl text-center">New values</legend>
              <label for="title">Title</label>
              <Field type="text" id="title" name="title" />
              <label for="description">Description</label>
              <Field type="text" id="description" name="description" />
              <label for="duration">Duration</label>
              <Field type="text" id="duration" name="duration" />

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