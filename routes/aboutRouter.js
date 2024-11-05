const { Router } = require("express");
const { aboutController } = require("../controller/aboutController");

const app = Router();

app.get("/aboutus", aboutController);

module.exports = app;
