import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#1976d2",
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          ☁ CloudShield
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >

          <Typography>

            Welcome

          </Typography>

          <Avatar>
            P
          </Avatar>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;