import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Shield";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await api.post("/auth/register", {
      name,
      email,
      password,
    });

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0F172A,#1D4ED8)",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: 5,
            borderRadius: 4,
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Avatar
              sx={{
                width: 70,
                height: 70,
                bgcolor: "#1976d2",
              }}
            >
              <ShieldIcon fontSize="large" />
            </Avatar>

            <Typography variant="h4" fontWeight="bold">
              Create Account
            </Typography>

            <Typography color="text.secondary">
              Join CloudShield
            </Typography>
          </Stack>

          <Box component="form" mt={4} onSubmit={handleSubmit}>
            <CustomInput
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <CustomInput
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <CustomInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <CustomInput
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <CustomButton
              text="Create Account"
              type="submit"
            />

            <Typography
              textAlign="center"
              mt={3}
            >
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;