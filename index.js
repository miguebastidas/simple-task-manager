const express = require("express");
require("dotenv").config();
const tasksRouter = require("./routes/tasks");
const dbConexion = require("./db.conexion");
const { urlencoded } = require("express");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(urlencoded({ extended: false }));
server.use(express.json());

server.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await dbConexion();
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
