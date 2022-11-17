// Import dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Import components
import ProjectTableCustomerDetails from "../../components/projects/ProjectTableCustomerDetails";

// Page function
export default function CustomerDetailsPage() {
  const { customer_id } = useParams();

  const [customer, setCustomer] = useState([]);
  const [projects, setProjects] = useState([]);

  async function loadCustomer(customer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/customers/${customer_id}`);
    const data = response.data; 
    const customer = data[0] 

    setCustomer(customer);
    setCustomer({...customer, annual_revenue: customer.annual_revenue.toLocaleString("en-US")})
  }

  async function loadProjects(customer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/projects/${customer_id}`);
    const data = response.data;
    console.log(data)
    setProjects(data);
    
  }

  useEffect(() => {
    loadCustomer(customer_id);
    loadProjects(customer_id)
  }, []);

  const navigate = useNavigate();

  async function onDelete(customer_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/customers/delete", { customer_id });
    if (response.status === 201) {
      navigate("/customers")
    } 
  }

  // DOM return
  return (
    <>
      <div class="flex flex-col justify-between">
        <div class="flex justify-between">
          <h2 class="text-3xl m-4">{customer.company_name}</h2>
          <div class="w-16" />
          <h2 class="text-2xl m-4">{customer.first_name}</h2>
          <h2 class="text-2xl m-4">{customer.last_name}</h2>
          <div class="max-w-1/2 flex-grow" />
          <h2 class="text-2xl m-4 mr-12">${customer.annual_revenue}</h2>
        </div>

        <div class="flex">
          <h2 class="text-2xl m-4 mr-12">{customer.email}</h2>
        </div>
      </div>

      <div class="h-16" />

      {projects.length > 0 ?
      <ProjectTableCustomerDetails projects={projects} onOpen={() => navigate("/project")} />
      : <p className="text-center bg-slate-200 px-36 mx-auto">This customer has no projects currently.</p>
      }

      <div class="flex-grow" />

      <div class="flex justify-between">
        <button class="btn btn-blue place-self-start m-4" onClick={() => navigate(`/edit-customer/${customer_id}`)}>
          Edit Customer
        </button>
        <button class="btn btn-red place-self-start m-4" onClick={() => {onDelete(customer.customer_id)}}>
          Delete Customer
        </button>
      </div>
    </>
  );
}
