// Imports dependencies
import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

const activeStyle = {
  className: "bg-red-700",
};

// Component function
export default function NavigationBottom() {
  return (
    <nav class="flex justify-between bg-sky-200">
      
      <NavLink
        to="../tasks"
        className={({ isActive }) =>
          isActive
            ? "bg-sky-800 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        All Tasks
      </NavLink>
      <div class="flex-grow bg-sky-100"/>
      <NavLink
        to="../certifications"
        className={({ isActive }) =>
          isActive
            ? "bg-sky-800 text-center text-white p-2 flex-grow"
            : "p-2 flex-grow text-center"
        }
      >
        Certifications
      </NavLink>

    </nav>
  );
}
