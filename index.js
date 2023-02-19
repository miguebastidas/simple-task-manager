const express = require("express");
require("dotenv").config();
const tasksRouter = require("./routes/tasks");

const server = express();

server.use("/api/v1/tasks", tasksRouter);

server.listen(process.env.PORT || 3000);
