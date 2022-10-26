// Imports dependencies
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  className: "bg-red-700",
};

// Component function
export default function Navigation() {
  return (
    <nav class="flex justify-between bg-sky-300">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "bg-sky-700 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="../developers"
        className={({ isActive }) =>
          isActive
            ? "bg-sky-700 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        Developers
      </NavLink>
      <NavLink
        to="../tasks"
        className={({ isActive }) =>
          isActive
            ? "bg-sky-700 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        Tasks
      </NavLink>
      <NavLink
        to="../customers"
        className={({ isActive }) =>
          isActive
            ? "bg-sky-700 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        Customers
      </NavLink>
      <NavLink
        to="../certifications"
        className={({ isActive }) =>
          isActive
            ? "bg-sky-700 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        Certifications
      </NavLink>
    </nav>
  );
}