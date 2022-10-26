// Imports dependencies
import React from "react";
import { Link } from "react-router-dom";

// Component function
export default function Navigation() {
  return (
    <nav class="flex justify-between p-2 bg-red-400">
      <Link to="/">Projects</Link>
      <Link to="../DeveloperPage">Developers</Link>
      <Link to="../TaskPage">Tasks</Link>
      <Link to="../CustomerPage">Customers</Link>
      <Link to="../CertPage">Certifications</Link>
    </nav>
  );
}
