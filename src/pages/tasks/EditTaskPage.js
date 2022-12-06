// Import dependencies
import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

// Import components

// Page function
export default function EditTaskPage() {
  const navigate = useNavigate();

  const { task_id } = useParams();

  const [task, setTask] = useState({});

  async function loadTask(task_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/tasks/${task_id}`);
    const data = response.data;
    const task = data[0];
    setTask(task);
  }

  useEffect(() => {
    loadTask(task_id);
  }, []);

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Edit Task Details</h1>

      <div class="flex w-2/3 place-self-center">
        <div id="Existing Information" class="p-8 bg-gray-300 mx-auto w-1/2 flex flex-col">
          <h1 class="text-xl text-center">Existing Information</h1>
          <div class="h-12" />
          <table class="text-left">
            <tbody>
              <tr>
                <th>Description</th>
                <div class="w-24" />
                <td>{task.description}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Due Date</th>
                <div class="w-24" />
                <td>{task.due_date}</td>
              </tr>
              <tr>
                <th>Priority</th>
                <div class="w-24" />
                <td>{task.priority}</td>
              </tr>
              <tr>
                <th>Task Status</th>
                <div class="w-24" />
                <td>{task.task_status}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex-grow" />
          <div class="">
            <button
              class="btn btn-blue"
              type="reset"
              onClick={() => {
                navigate("/tasks");
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div id="Edit Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
          <Formik
            enableReinitialize={true}
            initialValues={{
              task_id: task.task_id,
              description: task.description,
              due_date: task.due_date,
              priority: task.priority,
              task_status: task.task_status,
            }}
            values={task}
            onSubmit={async (values) => {
              const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/tasks/update", values);
              if (response.status === 201) {
                navigate("/tasks");
              }
            }}
          >
            <Form class="flex flex-col">
              <legend class="text-xl text-center">New values</legend>
              <label for="description">Description</label>
              <Field type="text" id="description" name="description" />
              <label for="due_date">Due Date</label>
              <Field type="date" id="due_date" name="due_date" />
              <label for="priority">Priority</label>
              <Field as="select" id="priority" name="priority">
                <option value={2}>2</option>
                <option value={1}>1</option>
              </Field>
              <label for="task_status">Task Status</label>
              <Field as="select" id="task_status" name="task_status">
                <option value="In-Progress">In-Progress</option>
                <option value="Awaiting Approval">Awaiting Approval</option>
              </Field>

              <div class="flex justify-between mt-6">
                <button class="btn-small btn-gray" type="reset">
                  Reset
                </button>
                <button class="btn btn-green" type="submit">
                  Update
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
