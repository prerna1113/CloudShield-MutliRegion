import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function IncidentCard({
  incident,
  onEdit,
  onDelete,
}) {
  const getColor = () => {
    switch (incident.severity) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      <CardContent>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {incident.title}
          </Typography>

          <Chip
            label={incident.severity}
            color={getColor()}
          />
        </Stack>

        <Typography
          mt={2}
          color="text.secondary"
        >
          {incident.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <CalendarMonthIcon
            fontSize="small"
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {new Date(
              incident.created_at
            ).toLocaleDateString()}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          mt={2}
        >
          <Tooltip title="View">

            <IconButton>

              <VisibilityIcon />

            </IconButton>

          </Tooltip>

          <Tooltip title="Edit">

            <IconButton
              color="warning"
              onClick={() =>
                onEdit(incident)
              }
            >

              <EditIcon />

            </IconButton>

          </Tooltip>

          <Tooltip title="Delete">

            <IconButton
              color="error"
              onClick={() =>
                onDelete(incident.id)
              }
            >

              <DeleteIcon />

            </IconButton>

          </Tooltip>

        </Stack>

      </CardContent>
    </Card>
  );
}

export default IncidentCard;