let DatabaseService = require("./DatabaseService");
var Response = require('../Response');

let response = new Response();

/**
 * Get all employees from database
 */
let _getAll = async () => {
    try {
        let query = "SELECT emp_id, emp_name, emp_salary FROM employee";
        let data = await DatabaseService.select(query);
        return response.buildSucessResponse(true, data, null);
    } catch (error) {
        return response.buildfailureResponse(false, null, error);
    }
}

/**
 * 
 */
let _searchById = async (empId) => {
    try {
        let query = "SELECT emp_id, emp_name, emp_salary FROM employee where emp_id= '" + empId + "'";
        let data = await DatabaseService.select(query);
        return response.buildSucessResponse(true, data, null);
    } catch (error) {
        return response.buildfailureResponse(false, null, error);
    }
}

/**
 * 
 */
let _storeData = async (employeeInfo) => {
    try {
        let searchByIdResponse = await _searchById(employeeInfo.emp_id);
        if (searchByIdResponse.isSucess && searchByIdResponse.data.length == 1) {
            return response.buildfailureResponse(false, null, "employee id '" + employeeInfo.emp_id + "' already present");
        }
        else {
            let query = "INSERT INTO employee(emp_id,emp_name,emp_salary)values ('" + employeeInfo.emp_id + "','" + employeeInfo.emp_name + "','" + employeeInfo.emp_salary + "')";
            let data = await DatabaseService.select(query);
            return response.buildSucessResponse(true, data, null);
        }
    } catch (error) {
        return response.buildfailureResponse(false, null, error);
    }
}

/**
 * 
 */
let _deleteById = async (empId) => {
    try {
        let searchByIdResponse = await _searchById(empId);
        if (searchByIdResponse.isSucess && searchByIdResponse.data.length == 1) {
            let query = "Delete From employee where emp_id= '" + empId + "'";
            let data = await DatabaseService.select(query);
            return response.buildSucessResponse(true, data, null);
        } else {
            return response.buildfailureResponse(false, null, "No record found for employee Id " + empId);
        }
    } catch (error) {
        return response.buildfailureResponse(false, null, error);
    }
}

/**
 * 
 */
let _deleteData = async () => {
    let query = "Delete From employee";
    return await DatabaseService.select(query);
}

/**
 * 
 */
let _updateData = async (employeeInfo) => {
    let query = "UPDATE employee SET emp_name = '" + employeeInfo.emp_name + "',emp_salary='" + employeeInfo.emp_salary + "' WHERE emp_id=" + employeeInfo.emp_id;
    return await DatabaseService.select(query);
}


module.exports = {
    getAll: _getAll,
    searchById: _searchById,
    storeData: _storeData,
    deleteById: _deleteById,
    deleteData: _deleteData,
    updateData: _updateData
};