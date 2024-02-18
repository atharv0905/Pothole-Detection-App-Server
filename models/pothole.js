const mongoose = require('mongoose');
const { POTHOLE_DB } = require('../config');

// Define the schema with specified collection name
const potholeSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  imagePath: String,
  timestamp: { type: Date, default: Date.now }
}, { collection: 'potholes_data' });

module.exports = mongoose.model('Pothole', potholeSchema);
