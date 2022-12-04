// Import dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import DeveloperTableRoster from "../components/developers/DeveloperTableRoster";

export default function DevRosterPage() {
  const { project_id } = useParams();
  const [project, setProject] = useState([]);
  const [devsIn, setDevsIn] = useState([]);
  const [devsOut, setDevsOut] = useState([]);

  async function loadProject(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/projects/${project_id}`);
    const data = response.data;
    const project = data[0];
    setProject(project);
  }

  async function loadDevsIn(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/for-projects/${project_id}`);
    const data = response.data;
    setDevsIn(data);
  }

  async function loadDevsOut(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/roster-out/${project_id}`);
    const data = response.data;
    setDevsOut(data);
  }

  useEffect(()=>{
    loadProject(project_id);
    loadDevsIn(project_id);
    loadDevsOut(project_id);
  }, [])

  // DOM return
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2>Developer</h2>
          <h2>
            RosterProject {project.project_id} - {project.title}
          </h2>
        </div>
        <div className="flex">
          <div>
            <h2>Assigned to Project</h2>
            {<DeveloperTableRoster developers={devsIn} />}
          </div>
          <div className="w-32" />
          <div>
            <h2 className="text-end ">Not Assigned to Project</h2>
            {<DeveloperTableRoster developers={devsOut} />}
          </div>
        </div>
      </div>
    </>
  );
}
