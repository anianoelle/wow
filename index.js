const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const appointmentRouter = require("./routes/appointment.router"); // Import the appointment router

app.use("/api/v1/appointment", appointmentRouter); // Use the appointment router

const PORT = process.env.PORT || 21108; // Define the port

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT); // Log the running port
});
