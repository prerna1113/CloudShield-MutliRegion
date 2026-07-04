import { Grid } from "@mui/material";
import IncidentCard from "./IncidentCard";

function IncidentList({
    incidents,
    onEdit,
   onDelete
 }) {
  return (
    <Grid container spacing={3}>
      {incidents.map((incident) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          key={incident.id}
        >
          <IncidentCard incident={incident}   onEdit={onEdit} onDelete ={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
}

export default IncidentList;