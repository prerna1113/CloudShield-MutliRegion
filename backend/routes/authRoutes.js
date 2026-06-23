
const express = require("express");

const router = express.Router();

const {register,login} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.get("/profile",protect,(req,res)=>{
    res.json({
        message:"Protected Route Accessed",
        user:req.user,
    });

});

router.post("/register",register);
router.post("/login",login);

module.exports = router;