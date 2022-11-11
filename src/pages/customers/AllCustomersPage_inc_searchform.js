// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// Import components
import Navigation from "../../components/Navigation";
import CustomerTable from "../../components/CustomerTable";

// Page function
export default function YoullRenderNothingAndYoullBeHappy() {
  const [customers, setCustomers] = useState([]);

  async function loadCustomers() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/customers");
    const customers = response.data;
    setCustomers(customers);
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  async function onView(customer_id) {
    navigate(`/customers/${customer_id}`);
  }

  async function onDelete(customer_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/customers/delete", { customer_id });
    if (response.status === 201) {
      loadCustomers();
    }
  }

  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Customers</h1>

      <CustomerTable customers={customers} onView={onView} onDelete={onDelete} />

      <div class="flex-grow" />

      <div id="add and search" class="flex justify-between">
        <button
          class="btn btn-green m-6 place-self-end"
          onClick={() => {
            navigate("/add-customer");
          }}
        >
          Add a New Customer
        </button>

        <div class="p-4 bg-gray-200 w-1/2 m-6">
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              company_name: "",
              customer_id: ""
            }}
          >
            <Form class="flex flex-col">
              <legend class="text-lg font-bold mb-4">Search Customers</legend>

              <div class="flex">
                <div class="flex flex-col flex-grow">
                  <label for="title">First Name</label>
                  <Field type="text" id="title" name="title" />
                  <label for="title">Last Name</label>
                  <Field type="text" id="title" name="title" />
                </div>

                <div class="w-6" />

                <div class="flex flex-col flex-grow">
                  <label for="title">Company Name</label>
                  <Field type="text" id="title" name="title" />
                  <label for="title">Customer ID</label>
                  <Field type="text" id="title" name="title" />
                </div>
              </div>

              <div class="flex justify-between mt-6">
                <button class="btn-small btn-gray">Reset</button>
                <button class="btn btn-blue">Search</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
