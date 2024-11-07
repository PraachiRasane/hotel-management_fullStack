
const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection URL and database name
const url = "mongodb://127.0.0.1:27017"; // MongoDB URL
const dbName = "hotelBooking"; // Database name

// MongoDB client
let db;
MongoClient.connect(url) // Connect to MongoDB
  .then((client) => {
    console.log("Connected to MongoDB");
    db = client.db(dbName);
  })
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

// Endpoint to handle the booking form submission
app.post("/submitBooking", async (req, res) => {
  try {
    // Collect booking data from form fields
    const bookingData = {
      checkInDate: req.body.cindate,   // Check-in date
      checkOutDate: req.body.coutdate, // Check-out date
      adults: parseInt(req.body.adult),   // Number of adults
      children: parseInt(req.body.child), // Number of children
      childrenAge: parseInt(req.body.childAge), // Age of children
      rooms: parseInt(req.body.room),  
      phone: parseInt(req.body.Phone),     // Phone number
      location: req.body.location          // Location of the hotel
    };

    // Insert booking data into "bookings" collection
    await db.collection("bookings").insertOne(bookingData);
    res.send("Booking information saved successfully.");
  } catch (error) {
    res.status(500).send("Error saving booking information: " + error.message);
  }
});

// Endpoint to handle the personal information form submission
app.post("/submitPersonalInfo", async (req, res) => {
  try {
    // Collect personal information from form fields
    const personalInfoData = {
      firstName: req.body.fn,          // First name
      lastName: req.body.sn,           // Last name
      dateOfBirth: req.body.dateofbirth,  // Date of birth
      mobileNumber: req.body.mno,      // Mobile number
      email: req.body.mail,            // Email
    };

    // Insert personal information into "personalInfo" collection
    await db.collection("personalInfo").insertOne(personalInfoData);
    res.send("Personal information saved successfully.");
  } catch (error) {
    res.status(500).send("Error saving personal information: " + error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
