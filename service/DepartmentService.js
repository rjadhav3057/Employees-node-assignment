let DatabaseService = require("./DatabaseService");

/**
 * Get all employees from database
 */
let _getAll = async () => {
    let query = "SELECT dept_id, dept_name, emp_id FROM department";
    return await DatabaseService.select(query);
}

module.exports = {
    getAll: _getAll,
};