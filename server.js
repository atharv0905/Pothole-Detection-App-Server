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
mongoose.connect("mongodb://pothole-detection-db:DMDorDeN3mTagIA0ZhSqiARvq6ZnhoEG7MWVfmzWYq1F0Lu0OGNXHb8MbVvL89BKbVXMygQqrJgJACDbY4YKzQ==@pothole-detection-db.mongo.cosmos.azure.com:10255/Pothole?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@pothole-detection-db@", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Start the server
app.listen(PORT, IP, () => {
    console.log(`Server is running on http://${IP}:${PORT}`);
});


