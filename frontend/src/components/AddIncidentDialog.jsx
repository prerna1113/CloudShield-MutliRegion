import { useState } from "react";
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

function AddIncidentDialog({
  open,
  handleClose,
  fetchIncidents,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [severity, setSeverity] =
    useState("Low");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/incidents",
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

      setTitle("");
      setDescription("");
      setSeverity("Low");

      handleClose();
    } catch (err) {
      console.log(err);
      alert("Unable to create incident");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Add New Incident
      </DialogTitle>

      <DialogContent>

        <CustomInput
          label="Incident Title"
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
          select
          value={severity}
          onChange={(e) =>
            setSeverity(e.target.value)
          }
        >
          <MenuItem value="High">
            High
          </MenuItem>

          <MenuItem value="Medium">
            Medium
          </MenuItem>

          <MenuItem value="Low">
            Low
          </MenuItem>
        </CustomInput>

      </DialogContent>

      <DialogActions>

        <Button
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Create Incident
        </Button>

      </DialogActions>
    </Dialog>
  );
}

export default AddIncidentDialog;