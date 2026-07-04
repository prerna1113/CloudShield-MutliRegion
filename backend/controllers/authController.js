const db = require("../config/db");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const checkUser =
      "SELECT * FROM users WHERE email = ?";

    db.query(checkUser, [email], async (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const hashedPassword =
        await bcrypt.hash(password, 10);

      const query =
        "INSERT INTO users(name,email,password) VALUES(?,?,?)";

      db.query(
        query,
        [name, email, hashedPassword],
        (err, result) => {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(201).json({
            message: "User Registered Successfully",
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
};



const login = (req,res)=>{
  console.log("Login request:", req.body);

 
    const {email,password} = req.body;

    const query = 
    "SELECT * FROM users WHERE email = ?";

    db.query(query,[email],async(err,result) =>{
        if(err){
            return res.status(500).json(err);
        }

        if(result.length === 0){
            return res.status(404).json({
                message:"User not found",
            });
        }

        const user = result[0];

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid credentials",
            });
        }

        const token = generateToken(user.id);
        res.status(200).json({
            message:"Login Successful",
            token,

        });
    });
};






module.exports = {
     register,
     login
     };