// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import components

// Page function
export default function AddDeveloperPage() {
  
  const navigate = useNavigate()

  async function onAdd(values){
    await axios.post("http://flip2.engr.oregonstate.edu:33522/developers", values);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Developer</h1>

      <div id="Add Developer Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <Formik
          initialValues={{
            first_name: "Mark",
            last_name: "Brawn",
            email: "mbrawn@keyenergetics.com",
            phone_number: "1910023476",
            project_id: "1",
          }}
          onSubmit={async (values) => {
            onAdd(values)
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
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
