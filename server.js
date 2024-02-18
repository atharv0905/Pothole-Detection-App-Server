const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { IP, PORT, DB_URI} = require('./config');
const pothole = require('./routes/pothole');
const admin = require('./routes/admin');
const user = require('./routes/user');
const employee = require('./routes/employee');

const app = express();
console.log("\x1b[2J\x1b[0f");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pothole", pothole);
app.use("/admin", admin);
app.use("/user", user);
app.use("/employee", employee);

// Connect to MongoDB 
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


