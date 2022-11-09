// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios"

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
          company_input: "",
          first_name_input: "",
          last_name_input: "",
          email_input: "",
          phone_number_input: "",
          annual_revenue_input: ""
          }}
          onSubmit={ async(values) =>{
            axios.post("http://flip3.engr.oregonstate.edu:33524/customers", values)
            }
          }
        >
        <Form class="flex flex-col">

          <label for="company_input">Company</label>
          <Field type="text" id="company_input" name="company_input"/>
          <label for="first_name_input">First Name</label>
          <Field type="text" id="first_name_input" name="first_name_input"/>
          <label for="last_name_input">Last Name</label>
          <Field type="date" id="last_name_input" name="last_name_input"/>
          <label for="email_input">Email</label>
          <Field type="text" id="email_input" name="email_input"/>
          <label for="phone_number_input">Phone Number</label>
          <Field type="text" id="phone_number_input" name="phone_number_input"/>
          <label for="annual_revenue_input">Annual Revenue</label>
          <Field type="text" id="annual_revenue_input" name="annual_revenue_input"/>

          <div class="flex justify-between mt-6">
            
            <button class="btn-small btn-gray" type="submit">Reset</button>
            <button class="btn btn-green">Add</button>
          </div>
        </Form>
        </Formik>
      </div>
    </>
  );
}
