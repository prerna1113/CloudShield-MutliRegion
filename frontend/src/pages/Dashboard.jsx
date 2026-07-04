import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import IncidentCard from "../components/IncidentCard";
import AddIncidentDialog from "../components/AddIncidentDialog";
import IncidentList from "../components/IncidentList";
import EditIncidentDialog from "../components/EditIncidentDialog";
import DeleteDialog from "../components/DeleteDialog";

function Dashboard() {

  const [incidents, setIncidents] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] =
  useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

const handleEdit = (incident) => {
  setSelectedIncident(incident);
  setEditOpen(true);
};

const handleDeleteClick =(id) =>{
  setDeleteId(id);
  setDeleteOpen(true);
};

const handleDelete = async () =>{
  try{
    const token = localStorage.getItem("token");
    await api.delete(`/incidents/${deleteId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchIncidents();
    setDeleteOpen(false);
  } catch (err){
    console.log(err);
  }
};

const [selectedIncident, setSelectedIncident] =
  useState(null);
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
  <Box sx={{ display: "flex", bgcolor: "#F4F7FC", minHeight: "100vh" }}>
    <Navbar />
    <Sidebar />

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        ml: "240px",
        mt: 8,
        p: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Welcome Back 👋
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Manage and monitor all incidents from one place.
      </Typography>

      {/* Statistics */}

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Incidents"
            value={incidents.length}
            color="#1976D2"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="High"
            value={
              incidents.filter(
                (i) => i.severity === "High"
              ).length
            }
            color="#F44336"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Medium"
            value={
              incidents.filter(
                (i) => i.severity === "Medium"
              ).length
            }
            color="#FF9800"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Low"
            value={
              incidents.filter(
                (i) => i.severity === "Low"
              ).length
            }
            color="#4CAF50"
          />
        </Grid>
      </Grid>

      {/* Header */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          Recent Incidents
        </Typography>

      <Button
  variant="contained"
  startIcon={<AddIcon />}
  onClick={() => setOpen(true)}
>
  Add Incident
</Button>
      </Box>

      {/* Incident Cards */}

    

<IncidentList
 incidents={incidents}
   onEdit={handleEdit}
  onDelete={handleDeleteClick}

  />
    </Box>
    <AddIncidentDialog
  open={open}
  handleClose={() => setOpen(false)}
  fetchIncidents={fetchIncidents}
/>

<EditIncidentDialog
  open={editOpen}
  handleClose={() => setEditOpen(false)}
  incident={selectedIncident}
  fetchIncidents={fetchIncidents}
/>

<DeleteDialog
  open={deleteOpen}
  handleClose={() => setDeleteOpen(false)}
  handleDelete={handleDelete}
/>
  </Box>
);
  
}

export default Dashboard;