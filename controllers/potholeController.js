const Pothole = require('../models/pothole');
const path = require('path');

// ----------------------------------------------------------------------------------------------------------------------------------
// add new pothole
// ----------------------------------------------------------------------------------------------------------------------------------
const addNewPothole = async (req, res) => {
    try {
        // console.log('latitude:', req.body.latitude);
        // console.log('longitude:', req.body.longitude);
        const potholeData = new Pothole({
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            imagePath: req.file.path
        });

        // Save the pothole data to the database
        const result = await potholeData.save();
        console.log('Pothole Data:', result);
        
        res.status(200).send('Added New Pothole Data');
    } catch (error) {
        res.status(400).send(`Error processing request: ${error.message}`);
    }
};
// ----------------------------------------------------------------------------------------------------------------------------------
// add new pothole
// ----------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------
// get all pothole data
// ----------------------------------------------------------------------------------------------------------------------------------
const getAllPotholeData = async (req, res) => {
    try {
        const potholes = await Pothole.find();
        res.status(200).json(potholes);
    } catch (error) {
        res.status(500).send(`Error fetching locations: ${error.message}`);
    }
};

const getLatLngOfAllPothole = async (req, res) => {
    try {
        const potholes = await Pothole.find({}, {latitude: 1, longitude: 1});
        res.status(200).json(potholes);
    } catch (error) {
        res.status(500).send(`Error fetching locations: ${error.message}`);
    }
}

const getImageOfSpecificPothole = async (req, res) => {
    try {
        const pothole = await Pothole.findById(req.query.id);
        // res.status(200).send(pothole.imagePath);
        res.status(200).sendFile(path.resolve(pothole.imagePath));
    } catch (error) {
        res.status(500).send(`Error fetching locations: ${error.message}`);
    }
};
// ----------------------------------------------------------------------------------------------------------------------------------
// get all pothole data
// ----------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    addNewPothole,
    getAllPotholeData,
    getLatLngOfAllPothole,
    getImageOfSpecificPothole
};