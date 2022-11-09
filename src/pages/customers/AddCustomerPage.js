// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import components

// Page function
export default function AddProjectPage() {
  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Customer</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <Formik
          initialValues={{
            company: "",
            first_name: "",
            last_name: "",
            email: "",
            annual_revenue: "",
          }}
          onSubmit={async (values) => {
            axios.post("http://localhost:3001/customers", values);
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
              <button class="btn-small btn-gray" type="submit">
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
