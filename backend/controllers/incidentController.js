const db = require("../config/db");

const createIncident = (req, res) => {
  const { title, description, severity } = req.body;

  const query =
    "INSERT INTO incidents(title, description, severity) VALUES(?,?,?)";

  db.query(
    query,
    [title, description, severity],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Incident Created Successfully",
      });
    }
  );
};


const getAllIncidents = (req,res) =>{
    const query = "SELECT * FROM incidents";

    db.query(query,(err,result)=>{
        if(err){
            return res.status(500).json(err);
        }

        res.status(200).json(result);
    })

}


const getIncidentById = (req,res)=>{

  const {id} = req.params;

  const query =
  "SELECT * FROM incidents WHERE id = ?";

  db.query(query,[id],(err,result)=>{
    if(err){
     return res.status(500).json(err);
    }

if(result.length ===0){
  return res.status(404).json({
    message:"Incident not found"
  });
}


    res.status(200).json(result[0]);

  });

};

module.exports = {
  createIncident,
  getAllIncidents,
  getIncidentById
};