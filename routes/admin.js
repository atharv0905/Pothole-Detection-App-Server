const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// ----------------------------------------------------------------------------------------------------------------------------------
// create admin
router.post('/create', async (req, res) => {
  const { name, username, password } = req.body;

  const result = await adminController.createAdmin(name, username, password);

  if (result.success) {
    res.status(201).json({ message: 'Admin created successfully', admin: result.admin });
  } else {
    res.status(400).json({ message: result.message });
  }
});
// create admin
// ----------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------
// admin login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const result = await adminController.adminLogin(username, password);

  if (result.success) {
    res.status(200).json({ message: 'Login successful', admin: result.admin });
  } else {
    res.status(401).json({ message: result.message });
  }
});
// admin login
// ----------------------------------------------------------------------------------------------------------------------------------

module.exports = router;
