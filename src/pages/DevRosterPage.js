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
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/roster-in/${project_id}`);
    const data = response.data;
    const project = data[0];
    setDevsIn(project);
  }

  async function loadDevsOut(project_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/roster-out/${project_id}`);
    const data = response.data;
    const project = data[0];
    setDevsOut(project);
  }

  useEffect(()=>{
    loadProject()
    loadDevsIn()
    loadDevsOut()
  }, [])

  // DOM return
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <h2>Developer Roster - </h2>
          <h2>{project.title}</h2>
        </div>
        <div className="flex">
          <div>
            <h2>Assigned to Project</h2>
            {<DeveloperTableRoster developers={devsIn} />}
          </div>
          <div className="w-16" />
          <div>
            <h2 className="text-end ">Not Assigned to Project</h2>
            {<DeveloperTableRoster developers={devsOut} />}
          </div>
        </div>
      </div>
    </>
  );
}
