import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#0F172A",
          color: "#fff",
        },
      }}
    >
      <Toolbar />

      <List>

        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/incidents")}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <ReportProblemIcon />
          </ListItemIcon>

          <ListItemText primary="Incidents" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/profile")}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <PersonIcon />
          </ListItemIcon>

          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>

      </List>
    </Drawer>
  );
}

export default Sidebar;