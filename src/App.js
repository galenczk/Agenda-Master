// Import dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import AllProjectsPage from "./pages/projects/AllProjectsPage";
import AddProjectPage from "./pages/projects/AddProjectPage"
import EditProjectPage from "./pages/projects/EditProjectPage";
import ProjectDetailsPage from "./pages/projects/ProjectDetailsPage"

import AllCustomersPage from "./pages/customers/AllCustomersPage";
import CustomerDetailsPage from "./pages/customers/CustomerDetailsPage"
import AddCustomerPage from "./pages/customers/AddCustomerPage"
import EditCustomerPage from "./pages/customers/EditCustomerPage"

import AllDevelopersPage from "./pages/developers/AllDevelopersPage";
import DeveloperDetailsPage from "./pages/developers/DeveloperDetailsPage"
import AddDeveloperPage from "./pages/developers/AddDeveloperPage";
import EditDeveloperPage from "./pages/developers/EditDeveloperPage";

import CertPage from "./pages/CertPage";
//import AddCertPage from "./pages/AddCertPage";
//import EditCertPage from "./pages/EditCertPage";

import TaskPage from "./pages/TaskPage";
//import AddTaskPage from "./pages/AddTaskPage";
//import EditTaskPage from "./pages/EditTaskPage";


import LandingPage from "./pages/LandingPage"


// Import components
import Navigation from "./components/Navigation";

// Page function
export default function App() {
  // DOM return
  return (
    <div class="flex flex-col min-h-screen">
      <Router>
        <div class="sticky top-0 z-50">
          <header class="bg-slate-800 text-center text-white text2xl py-2 sticky top-0 z-50">
           Agenda Master - The Database Management Tool by Key Energetics
          </header>

          <Navigation />
        </div>

        <main class="flex flex-col flex-grow">
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            
            <Route path="/projects" exact element={<AllProjectsPage />} />
            <Route path="/add-project" exact element={<AddProjectPage />} />
            <Route path="/edit-project" exact element={<EditProjectPage />} />
            <Route path="/project" exact element={<ProjectDetailsPage />} />
            
            <Route path="/customers" exact element={<AllCustomersPage />} />
            <Route path="/customers/:customer_id" exact element={<CustomerDetailsPage />} />
            <Route path="/add-customer" exact element={<AddCustomerPage />} />
            <Route path="/edit-customer/:customer_id" exact element={<EditCustomerPage />} />

            <Route path="/developers" exact element={<AllDevelopersPage />} />
            <Route path="/developers/1" exact element={<DeveloperDetailsPage />} />
            <Route path="/add-developer" exact element={<AddDeveloperPage />} />
            <Route path="/edit-developer/1" exact element={<EditDeveloperPage />} />
            
            
            <Route path="/certifications" exact element={<CertPage />} />
            <Route path="/tasks" exact element={<TaskPage />} />
            

          </Routes>
        </main>

        <footer class="flex justify-center text-center bg-slate-400 p-0.5">
          <p class="mr-2">Galen Ciszek and Ashwini Chawla</p>
          <p class="ml-2"> &copy; 2022</p>
        </footer>
      </Router>
    </div>
  );
}
