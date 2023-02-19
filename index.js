const express = require("express");
require("dotenv").config();

const server = express();

server.listen(process.env.PORT || 3000);
