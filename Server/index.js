const express = require("express");
const bodyparser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const { mongoose } = require("./db");
const studentController = require("./controllers/studentController");
const userController = require("./controllers/userController");

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.listen(3000, () => console.log("Server started at port 3000"));

app.use("/students", studentController);
app.use("/users", userController);
