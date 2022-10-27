// Import dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import ProjectPage from "./pages/ProjectPage";
import DeveloperPage from "./pages/DeveloperPage";
import CertPage from "./pages/CertPage";
import TaskPage from "./pages/TaskPage";
import CustomerPage from "./pages/CustomerPage";
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
            Project Management Tool by Key Energetics
          </header>

          <Navigation />
        </div>

        <main class="flex flex-col flex-grow">
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/projects" exact element={<ProjectPage />} />
            <Route path="/developers" exact element={<DeveloperPage />} />
            <Route path="/certifications" exact element={<CertPage />} />
            <Route path="/tasks" exact element={<TaskPage />} />
            <Route path="/customers" exact element={<CustomerPage />} />
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
