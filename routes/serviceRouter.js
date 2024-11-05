const { Router } = require("express");
const {
  getTechnologies,
  getStaffing,
  getHospitality,
} = require("../controller/serviceController");
const app = Router();

app.get("/staffing", getStaffing);
app.get("/technology", getTechnologies);
app.get("/hospitality", getHospitality);

module.exports = app;
