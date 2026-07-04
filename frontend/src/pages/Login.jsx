import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  Container,
  Avatar,
  Stack,
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Shield";

import api from "../services/api";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=async(e)=>{

      e.preventDefault();

      const res=await api.post("/auth/login",{
        email,
        password
      });

      localStorage.setItem("token",res.data.token);

      navigate("/dashboard");

  }

  return (

<Box
sx={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#0F172A,#1D4ED8)"
}}
>

<Container maxWidth="sm">

<Paper
elevation={12}
sx={{
padding:5,
borderRadius:4
}}
>

<Stack
spacing={2}
alignItems="center"
>

<Avatar
sx={{
width:70,
height:70,
bgcolor:"#1976d2"
}}
>

<ShieldIcon fontSize="large"/>

</Avatar>

<Typography
variant="h4"
fontWeight="bold"
>

CloudShield

</Typography>

<Typography
color="text.secondary"
>

Login to continue

</Typography>

</Stack>

<Box
component="form"
onSubmit={handleSubmit}
mt={4}
>

<CustomInput
label="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<CustomInput
label="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<CustomButton
text="Login"
type="submit"
/>

<Typography
textAlign="center"
mt={3}
>

Don't have an account?{" "}

<Link
to="/register"
>

Register

</Link>

</Typography>

</Box>

</Paper>

</Container>

</Box>

  );

}

export default Login;