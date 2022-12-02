// Import dependencies
import React from "react";
import { Formik, Form, Field } from "formik";

// Import components
import Navigation from "../../components/Navigation"
import TaskTable from "../../components/tasks/TaskTable"
import { useNavigate } from "react-router-dom";


  const tasks = [
    {
      task_id: 1,
      description: "Make UI better.",
      due_date: "Yesterday",
      priority: "1",
      task_status: "In Progress",
      project_id: 1,
    },
  ];

export default function AllTasksPage() {

  const navigate = useNavigate()

  async function onEdit() {
    navigate(`/edit-task/1`);
  }

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-4">All Tasks</h1>

      <TaskTable tasks={tasks} onEdit={onEdit} />

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
