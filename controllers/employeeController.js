const Employee = require('../models/employee');

// ----------------------------------------------------------------------------------------------------------------------------------
// create Employee
async function createEmployee(name, username, password) {
    try {
        // Check if the Employee already exists
        const existingEmployee = await Employee.findOne({ username });
        if (existingEmployee) {
            return { success: false, message: 'Employee already exists with the provided username' };
        }

        // Create a new Employee instance
        const newEmployee = new Employee({ name, username, password });

        // Save the new Employee to the database
        await newEmployee.save();

        return { success: true, Employee: newEmployee };
    } catch (error) {
        console.error('Error creating employee:', error);
        return { success: false, message: 'An error occurred while creating employee' };
    }
}
// create Employee
// ----------------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------------------
// Employee login
async function EmployeeLogin(username, password) {
    try {
        // Find the Employee with the provided username
        const Employee = await Employee.findOne({ username });

        // If no Employee found with the provided username
        if (!Employee) {
            return { success: false, message: 'Invalid username or password' };
        }

        // Check if the password matches
        if (Employee.password !== password) {
            return { success: false, message: 'Invalid username or password' };
        }

        // If username and password are correct
        return { success: true, Employee };
    } catch (error) {
        console.error('Error during Employee login:', error);
        return { success: false, message: 'An error occurred' };
    }
}
// Employee login
// ----------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    EmployeeLogin,
    createEmployee
};