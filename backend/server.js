require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/incidents",incidentRoutes);


app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to Incident Manager"
    });
});

app.listen(5002,(req,res)=>{
    console.log("Server is running on 5002")
});