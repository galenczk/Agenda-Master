// Import dependencies
import React from "react";
import { useFormik } from "formik";

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
      <h1 class="text-3xl p-4">
        All Tasks
      </h1>
          
      <TaskTable tasks={tasks} onEdit={onEdit} />

      

      <div class="flex-grow" />

<div class="flex justify-between">
  <button class="btn btn-green m-6 place-self-end" onClick={() => {navigate("/add-task")}}>Add a New Task</button>


</div>
      
    </>
  );
}
