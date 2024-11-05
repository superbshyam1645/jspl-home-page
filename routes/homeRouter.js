const { Router } = require("express");
const { getAll } = require("../controller/homeController");
const app = Router();

app.get("/", getAll);
module.exports = app;
