import { useEffect, useState } from "react";
import api from "../services/api";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
} from "@mui/material";

import CustomInput from "./CustomInput";

function EditIncidentDialog({
  open,
  handleClose,
  incident,
  fetchIncidents,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [severity, setSeverity] =
    useState("Low");

  useEffect(() => {
    if (incident) {
      setTitle(incident.title);
      setDescription(incident.description);
      setSeverity(incident.severity);
    }
  }, [incident]);

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    await api.put(
      `/incidents/${incident.id}`,
      {
        title,
        description,
        severity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchIncidents();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Edit Incident</DialogTitle>

      <DialogContent>

        <CustomInput
          label="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <CustomInput
          label="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <CustomInput
          label="Severity"
          value={severity}
          select
          onChange={(e) =>
            setSeverity(e.target.value)
          }
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </CustomInput>

      </DialogContent>

      <DialogActions>

        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleUpdate}
        >
          Update
        </Button>

      </DialogActions>
    </Dialog>
  );
}

export default EditIncidentDialog;