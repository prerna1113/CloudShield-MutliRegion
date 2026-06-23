
const express = require("express");
const router = express.Router();

const {
    createIncident,
    getAllIncidents,
    getIncidentById
} = require("../controllers/incidentController");

const protect = require("../middleware/authMiddleware");

router.post("/",protect,createIncident);
router.get("/", protect, getAllIncidents);
router.get("/:id",protect,getIncidentById);
module.exports = router;