// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import components

// Page function
export default function AddCertificationPage() {

  const navigate = useNavigate()

  async function onAdd(values){
    await axios.post("http://flip2.engr.oregonstate.edu:33522/certifications", values);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Certification</h1>

      <div id="Add Certification Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <Formik
          initialValues={{
            title: "Certified Information Systems Security Professional",
            description: "Required to work on government projects.",
            duration: "3 years",
          }}
          onSubmit={async (values) => {
            onAdd(values)
          }}
        >
        <Form class="flex flex-col">
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
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
