// routes/appointment.router.js

const express = require('express');
const router = express.Router();
const appointmentsController = require("../controller/appointment.controller");

router.get("/", appointmentsController.getAll); // Define the route for getting appointments

module.exports = router; // Export the router
