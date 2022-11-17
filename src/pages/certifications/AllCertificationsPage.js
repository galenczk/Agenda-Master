// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// Import components
import Navigation from "../../components/Navigation";
import CertificationTable from "../../components/certifications/CertificationTable";
import { useNavigate } from "react-router-dom";

const certifications = [
  {
    certfication_id: 1,
    title: "Certified Information Systems Security Professional",
    description: "Required to work on government projects",
    duration: "3 years",
  },
  {
    certfication_id: 2,
    title: "Certified Ethical Hacker(CEH)",
    description: "Required for tech lead positions.",
    duration: "3 years",
  },
  {
    certfication_id: 3,
    title: "AWS Certified Solutions Architect",
    description: "Required for cloud application development.",
    duration: "3 years",
  },
];

export default function AllCertificationsPage() {

  const [certifications, setCertifications] = useState([]);
  const navigate = useNavigate();

  async function loadCertifications() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/certifications");
    const certifications = response.data;
    setCertifications(certifications);
  }

  useEffect(() => {
    loadCertifications();
  }, []);

  async function onView(certfication_id) {
    navigate(`/certifications/${certification_id}`);
  }

  async function onDelete(certification_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/certifications/delete", { certification_id });
    if (response.status === 201) {
      loadCertifications();
    }
  }

  async function onEdit() {
    navigate(`/edit-certification/${certification_id}`);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">Certifications</h1>

      <CertificationTable certifications={certifications} onView={onView} onEdit={onEdit} onDelete={onDelete}/>

      <div class="flex-grow" />

      <div id="add and search" class="flex justify-between">
        <button
          class="btn btn-green m-6 place-self-end"
          onClick={() => {
            navigate("/add-certification");
          }}
        >
          Add a New Certification
        </button>
      </div>
    </>
  );
}
