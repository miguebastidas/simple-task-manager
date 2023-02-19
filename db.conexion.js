const mongoose = require("mongoose");

const dbConexion = async () => {
  mongoose.set("strictQuery", true);
  const conn = await mongoose.connect(process.env.DB_URI);
  console.log(`Conexion to database working on host ${conn.connection.host}`);
};

module.exports = dbConexion;
