// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

// Import components

// Page function
export default function EditProjectPage() {
  
  const navigate = useNavigate()

  const { customer_id } = useParams();

  const [customer, setCustomer] = useState({});

  async function loadCustomer(customer_id) {
    const response = await axios.get(`http://localhost:3001/customers/${customer_id}`);
    const data = response.data;
    const customer = data[0];
    setCustomer(customer);

  }

  useEffect(() => {
    loadCustomer(customer_id);
  }, []);

  const company = customer.company_name;

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Edit Customer Details</h1>

      <div class="flex">
        <div id="Original Values" class="p-8 bg-gray-300 mx-auto w-1/2">
          <h1 class="text-xl text-center">Existing Information</h1>
          <div class="h-12" />
          
        </div>
        <div id="Edit Customer Form" class="p-8 bg-gray-300 mx-auto w-1/2">
          <Formik
            enableReinitialize={true}
            initialValues={{
              customer_id: customer.customer_id,
              company_name: customer.company_name,
              first_name: customer.first_name,
              last_name: customer.last_name,
              email: customer.email,
              annual_revenue: customer.annual_revenue,
            }}
            values={customer}
            onSubmit={async (values) => {
              axios.post("http://localhost:3001/customers/update", values);
              console.log(values)
              navigate(-1)
            }}
          >
            <Form class="flex flex-col">
              <legend class="text-xl text-center">New values</legend>
              <label for="company_name">Company Name</label>
              <Field type="text" id="company_name" name="company_name" />
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
