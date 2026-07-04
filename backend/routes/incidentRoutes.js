
const express = require("express");
const router = express.Router();

const {
    createIncident,
    getAllIncidents,
    getIncidentById,
    updateIncident,
    deleteIncident
} = require("../controllers/incidentController");

const protect = require("../middleware/authMiddleware");

router.post("/",protect,createIncident);
router.get("/", protect, getAllIncidents);
router.get("/:id",protect,getIncidentById);
router.put("/:id",protect,updateIncident);
router.delete("/:id",protect,deleteIncident);

module.exports = router;