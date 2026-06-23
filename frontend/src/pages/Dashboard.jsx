import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    const token =
      localStorage.getItem("token");

    const res = await api.get(
      "/incidents",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setIncidents(res.data);
  };

  return (
    <div>
      <h1>Incidents</h1>

      {incidents.map((incident) => (
        <div key={incident.id}>
          <h3>{incident.title}</h3>
          <p>{incident.description}</p>
          <p>{incident.severity}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;