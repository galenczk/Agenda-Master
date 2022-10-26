// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components

// Page function
export default function DeveloperPage() {
  // Formik to handle forms.
  const formik = useFormik({
    initialValues: {},
  });

  // Page navigation
  const navigate = useNavigate();

  // DOM return
  return <></>;
}
