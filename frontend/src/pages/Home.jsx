import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: 6,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          <ShieldIcon
            sx={{
              fontSize: 80,
              color: "#1976d2",
            }}
          />

          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            CloudShield
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Secure Incident Management System
          </Typography>

          <Typography
            sx={{
              mb: 5,
              color: "#555",
            }}
          >
            Monitor, report and resolve incidents with a
            modern cloud-native platform powered by AWS
            Multi-Region Disaster Recovery.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;