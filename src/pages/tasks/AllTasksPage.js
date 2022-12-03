// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import components
import TaskTable from "../../components/tasks/TaskTable";

export default function AllTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  async function loadTasks(projectID = -1) {
    if (projectID == -1) {
      const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/tasks");
      const tasks = response.data;
      setTasks(tasks);
    } else {
      const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/tasks/project/${projectID}`);
      const tasks = response.data;
      setTasks(tasks);
    }
  }

  async function loadProjects() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/projects");
    const projects = response.data;
    console.log(projects);
    setProjects(projects);
  }

  async function onDelete(task_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/tasks/delete", { task_id });
    if (response.status === 201) {
      loadTasks();
    }
  }

  async function onEdit(task_id) {
    navigate(`/edit-task/${task_id}`);
  }

  useEffect(() => {
    loadTasks();
    loadProjects();
  }, []);

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">All Tasks</h1>

      <TaskTable tasks={tasks} onEdit={onEdit} onDelete={onDelete} />

      <div class="flex-grow" />

      <div className="flex justify-between">
        <div class="flex justify-between">
          <button
            class="btn btn-green m-6 place-self-end"
            onClick={() => {
              navigate("/add-task");
            }}
          >
            Add a New Task
          </button>
        </div>

        <div class="p-4 bg-gray-300 w-96 m-6">
          <Formik
            initialValues={{
              project_id: -1,
            }}
            onSubmit={(values) => {
              loadTasks(values.project_id);
            }}
            onReset={() => {
              loadTasks(-1);
            }}
          >
            <Form class="flex flex-col">
              <legend class="text-lg font-bold mb-4">Filter Tasks</legend>

              <div class="flex">
                <div class="flex flex-col flex-grow">
                  <label for="project_id">Project</label>
                  <Field as="select" id="project_id" name="project_id" className="bg-white">
                    <option value={-1}>-</option>
                    {projects.map((item, key) => {
                      return <option value={item.project_id}>{item.title}</option>;
                    })}
                  </Field>
                </div>
              </div>

              <div class="flex justify-between mt-6">
                <button class="btn-small btn-gray" type="reset">
                  Reset
                </button>
                <button class="btn btn-blue" type="submit">
                  Filter
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
