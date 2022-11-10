// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Page function
export default function AddCustomerPage() {

  const navigate = useNavigate()

  async function onAdd(values){
    await axios.post("http://flip2.engr.oregonstate.edu:33522/customers", values);
  }
// DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Customer</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <Formik
          initialValues={{
            company: "Fake Business",
            first_name: "Galen",
            last_name: "Ciszek",
            email: "ciszekg@oregonstate.edu",
            annual_revenue: "10000000",
          }}
          onSubmit={async (values) => {
            onAdd(values)
          }}
        >
          <Form class="flex flex-col">
            <label for="company">Company</label>
            <Field type="text" id="company" name="company" />
            <label for="first_name">First Name</label>
            <Field type="text" id="first_name" name="first_name" />
            <label for="last_name">Last Name</label>
            <Field type="text" id="last_name" name="last_name" />
            <label for="email">Email</label>
            <Field type="text" id="email" name="email" />
            <label for="annual_revenue">Annual Revenue</label>
            <Field type="text" id="annual_revenue" name="annual_revenue" />

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
