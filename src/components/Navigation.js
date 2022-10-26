// Imports dependencies
import React from "react";
import { Link } from "react-router-dom";

// Component function
export default function Navigation() {
  return (
    <nav class="flex justify-between p-2 bg-red-400">
      <Link to="/">Projects</Link>
      <Link to="../developers">Developers</Link>
      <Link to="../tasks">Tasks</Link>
      <Link to="../customers">Customers</Link>
      <Link to="../certifications">Certifications</Link>
    </nav>
  );
}
