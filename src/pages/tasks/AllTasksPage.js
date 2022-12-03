// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

// Import components
import TaskTable from "../../components/tasks/TaskTable";


export default function AllTasksPage() {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate();

  async function loadTasks() {
    const response = await axios.get("http://flip2.engr.oregonstate.edu:33522/tasks");
    const tasks = response.data;
    setTasks(tasks);
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

        <div class="p-4 bg-gray-200 w-1/2 m-6">
          <Formik
            initialValues={{
              ID: "",
              dueDate: "",
              priority: "",
              status: "",
              project: "",
            }}
          >
            <Form class="flex flex-col">
              <legend class="text-lg font-bold mb-4">Search Tasks</legend>

              <div class="flex">
                <div class="flex flex-col flex-grow">
                  <label for="task_ID">Task ID</label>
                  <Field type="text" id="task_ID" name="task_ID" />
                  <label for="dueDate">Due Date</label>
                  <Field type="text" id="dueDate" name="dueDate" />
                  <label for="priority">Priority</label>
                  <Field type="text" id="priority" name="priority" />
                </div>

                <div class="w-6" />

                <div class="flex flex-col flex-grow justify-center">
                  <label for="status">Status</label>
                  <Field type="text" id="status" name="status" />
                  <label for="project">Project</label>
                  <Field type="text" id="project" name="project" />
                </div>
              </div>

              <div class="flex justify-between mt-6">
                <button class="btn-small btn-gray">Reset</button>
                <button class="btn btn-blue">Search</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
