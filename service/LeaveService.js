let DatabaseService = require("./DatabaseService");

/**
 * Get all employees from database
 */
let _getAll = async () => {
    let query = "SELECT leave_id, leave_date, emp_id FROM holiday";
    return await DatabaseService.select(query);
}

module.exports = {
    getAll: _getAll,
};