// Import dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CertificationTableAwardPage from "../components/certifications/CertificationTableAwardPage";

export default function DevCertPage() {
  const { developer_id } = useParams();
  const [developer, setDeveloper] = useState([]);
  const [certsHeld, setCertsHeld] = useState([]);
  const [certsNotHeld, setCertsNotHeld] = useState([]);

  async function loadDeveloper(developer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/developers/${developer_id}`);
    const data = response.data;
    const developer = data[0];
    setDeveloper(developer);
  }

  async function loadCertsHeld(developer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/certifications/held/${developer_id}`);
    const data = response.data;
    console.log(data)
    setCertsHeld(data);
  }

  async function loadCertsNotHeld(developer_id) {
    const response = await axios.get(`http://flip2.engr.oregonstate.edu:33522/certifications/not-held/${developer_id}`);
    const data = response.data;
    console.log(data)
    setCertsNotHeld(data);
  }

  async function awardCert(developer_id, certification_id) {
    const response = await axios.post("http://flip2.engr.oregonstate.edu:33522/dev-cert/award", {
      certification_id: certification_id,
      developer_id: developer_id,
    });
    if(response.status === 201){
      loadCertsHeld(developer_id);
      loadCertsNotHeld(developer_id);
    }
  }
  async function removeCert(developer_id, certification_id) {
    const response = await axios.post(`http://flip2.engr.oregonstate.edu:33522/dev-cert/remove`, {
      certification_id: certification_id,
      developer_id: developer_id,
    });
    if (response.status === 201) {
      loadCertsHeld(developer_id);
      loadCertsNotHeld(developer_id);
    }
  }

  useEffect(() => {
    loadDeveloper(developer_id);
    loadCertsHeld(developer_id);
    loadCertsNotHeld(developer_id);
  }, []);

  // DOM return
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2>
            Developer's Certifications {developer.first_name} {developer.last_name}
          </h2>
        </div>
        <div className="flex">
          <div>
            <h2>Certifications Held</h2>
            {
              <CertificationTableAwardPage
                certifications={certsHeld}
                chirality={"left"}
                awardCert={awardCert}
                removeCert={removeCert}
                developer_id={developer_id}
              />
            }
          </div>
          <div className="w-32" />
          <div>
            <h2 className="text-end ">Certifications Not Held</h2>
            {
              <CertificationTableAwardPage
                certifications={certsNotHeld}
                chirality={"right"}
                awardCert={awardCert}
                removeCert={removeCert}
                developer_id={developer_id}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
}
