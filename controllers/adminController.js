const Admin = require('../models/admin');

// ----------------------------------------------------------------------------------------------------------------------------------
// create admin
async function createAdmin(name, username, password) {
    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return { success: false, message: 'Admin already exists with the provided username' };
        }

        // Create a new admin instance
        const newAdmin = new Admin({ name, username, password });

        // Save the new admin to the database
        await newAdmin.save();

        return { success: true, admin: newAdmin };
    } catch (error) {
        console.error('Error creating admin:', error);
        return { success: false, message: 'An error occurred while creating admin' };
    }
}
// create admin
// ----------------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------------------
// admin login
async function adminLogin(username, password) {
    try {
        // Find the admin with the provided username
        const admin = await Admin.findOne({ username });

        // If no admin found with the provided username
        if (!admin) {
            return { success: false, message: 'Invalid username or password' };
        }

        // Check if the password matches
        if (admin.password !== password) {
            return { success: false, message: 'Invalid username or password' };
        }

        // If username and password are correct
        return { success: true, admin };
    } catch (error) {
        console.error('Error during admin login:', error);
        return { success: false, message: 'An error occurred' };
    }
}
// admin login
// ----------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    adminLogin,
    createAdmin
};