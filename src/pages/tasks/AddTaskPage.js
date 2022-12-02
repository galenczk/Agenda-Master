// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import components

// Page function
export default function AddTaskPage() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  async function loadProjects() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/projects");
    const projects = response.data;
    console.log(projects);
    setProjects(projects);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Add a Task</h1>

      <div id="Add Task Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <Formik
          initialValues={{
            description: "",
            due_date: "",
            priority: "",
            status: "",
            project_id: "",
          }}
        >
          <Form class="flex flex-col">
            <label for="description">Description </label>
            <Field type="text" id="description" name="first_descriptionname" />
            <label for="due_date">Due Date</label>
            <Field type="text" id="due_date" name="due_date" />
            <label for="priority">Priority</label>
            <Field type="date" id="priority" name="priority" />
            <label for="status">Status</label>
            <Field as="select" id="status" name="status" />
            <label for="project">Project</label>
            <Field as="select" id="project" name="project">
              <option value=""> - </option>
              {projects.map((item, key) => {
                return (
                  <option key={key + 1} value={item.project_id}>
                    {item.title}
                  </option>
                );
              })}
            </Field>

            <div class="flex justify-between mt-6">
              <button class="btn-small btn-gray" type="reset">
                Reset
              </button>
              <button class="btn btn-green" type="submit">
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
