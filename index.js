const express = require("express");
require("dotenv").config();
const tasksRouter = require("./routes/tasks");
const dbConexion = require("./db.conexion");

const PORT = process.env.PORT || 3000;

const server = express();
dbConexion();

server.use("/api/v1/tasks", tasksRouter);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
