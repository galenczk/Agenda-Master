// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios"

// Import components

// Page function
export default function AddProjectPage() {
 
  const formik = useFormik({
    initialValues: {
      company_input: "",
      first_name_input: "",
      last_name_input: "",
      email_input: "",
      phone_number_input: "",
      annual_revenue_input: ""
    }
  })

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Customer</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <form class="flex flex-col">

          <label for="company_input">Company</label>
          <input type="text" id="company_input" name="company_input" onChange={formik.handleChange} value={formik.values.firstName} />
          <label for="first_name_input">First Name</label>
          <input type="text" id="first_name_input" name="first_name_input" onChange={formik.handleChange} value={formik.values.firstName} />
          <label for="last_name_input">Last Name</label>
          <input type="date" id="last_name_input" name="last_name_input" onChange={formik.handleChange} value={formik.values.firstName} />
          <label for="email_input">Email</label>
          <input type="text" id="email_input" name="email_input" onChange={formik.handleChange} value={formik.values.firstName} />
          <label for="phone_number_input">Phone Number</label>
          <input type="text" id="phone_number_input" name="phone_number_input" onChange={formik.handleChange} value={formik.values.firstName} />
          <label for="annual_revenue_input">Annual Revenue</label>
          <input type="text" id="annual_revenue_input" name="annual_revenue_input" onChange={formik.handleChange} value={formik.values.firstName} />

          <div class="flex justify-between mt-6">
            
            <button class="btn-small btn-gray" onClick={formik.resetForm}>Reset</button>
            <button class="btn btn-green">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
