const User = require('../models/user');

// ----------------------------------------------------------------------------------------------------------------------------------
// create User
async function createUser(name, username, password) {
    try {
        // Check if the User already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return { success: false, message: 'User already exists with the provided username' };
        }

        // Create a new User instance
        const newUser = new User({ name, username, password });

        // Save the new User to the database
        await newUser.save();

        return { success: true, User: newUser };
    } catch (error) {
        console.error('Error creating User:', error);
        return { success: false, message: 'An error occurred while creating User' };
    }
}
// create User
// ----------------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------------------
// User login
async function UserLogin(username, password) {
    try {
        // Find the User with the provided username
        const User = await User.findOne({ username });

        // If no User found with the provided username
        if (!User) {
            return { success: false, message: 'Invalid username or password' };
        }

        // Check if the password matches
        if (User.password !== password) {
            return { success: false, message: 'Invalid username or password' };
        }

        // If username and password are correct
        return { success: true, User };
    } catch (error) {
        console.error('Error during User login:', error);
        return { success: false, message: 'An error occurred' };
    }
}
// User login
// ----------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    UserLogin,
    createUser
};