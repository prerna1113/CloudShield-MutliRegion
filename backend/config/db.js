
const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"database-1.c5uoauwmqc7u.ap-south-1.rds.amazonaws.com",
    user:"admin",
    password:"admin123",
    database:"cloudshield",
    port:3306

});

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.log("DB not ready, retrying...");
      setTimeout(connectDB, 5000);
    } else {
      console.log("Database Connected");
    }
  });
};

connectDB();
module.exports = db;
