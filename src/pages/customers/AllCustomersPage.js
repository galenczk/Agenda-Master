// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

// Import components
import CustomerTable from "../../components/CustomerTable";

// Page function
export default function AllCustomersPage() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

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

  async function onEdit(customer_id) {
    navigate(`/edit-customer/${customer_id}`);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Customers</h1>

      <CustomerTable customers={customers} onView={onView} onDelete={onDelete} onEdit={onEdit} />

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
      </div>
    </>
  );
}
