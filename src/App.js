// Import dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import ProjectPage from "./pages/ProjectPage"

// Import components
import Navigation from "./components/Navigation"

// Page function
export default function App() {
  // DOM return
  return (
    <div class="flex flex-col min-h-screen">
      <Router>
        <header class="bg-gray-800 text-white text2xl py-2">
          Project Management Tool by Key Energetics
        </header>

        <Navigation />

        <main
          class="flex flex-col mb-auto p-4"
        >
          <Routes>
            <Route path="/" exact element={<ProjectPage />} />
          </Routes>
        </main>

        <footer class="text-center bg-gray-400 p-0.5">
          <p>Galen Ciszek and Ashwini Chawla &copy; 2022</p>
        </footer>
      </Router>
    </div>
  );
}
