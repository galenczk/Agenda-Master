// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import components

// Page function
export default function AddProjectPage() {
  const navigate = useNavigate()

  async function onAdd(values){
    await axios.post("http://flip2.engr.oregonstate.edu:33522/projects", values);
  }
  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Project</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <Formik
          initialValues={{
            title: "Excavation Log",
            description: "Archaeological mapping service requested by Carrera Terra",
            delivery_date: 2023-10-02,
            proj_status: "In progress",
            customer_id: "4",
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
          <label for="delivery_date">Delivery Date</label>
          <Field type="date" id="delivery_date" name="delivery_date" />
          <label for="proj_status">Project Status</label>
          <Field type="text" id="proj_status" name="proj_status" />
          <label for="customer_id">Customer ID</label>
          <Field type="text" id="customer_id" name="customer_id" />

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
