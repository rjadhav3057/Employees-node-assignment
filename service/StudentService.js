let DatabaseService = require("./DatabaseService");
let Response = require("../Response");
let Joi = require('joi');
// 
let response = new Response();

/**
 * 
 * 
 */
let _storeData = async (studentInfo) => {
    try {
        let query = "INSERT INTO student(firstName,lastName,email,dob,city,state,gender,id)values ('" + studentInfo.firstName + "','" + studentInfo.lastName + "','" + studentInfo.email + "','" + studentInfo.dob + "','" + studentInfo.city + "','" + studentInfo.state + "','" + studentInfo.gender + "','" + studentInfo.id + "')";
        let data = await DatabaseService.select(query);
        return response.buildSucessResponse(true, data, null);
    } catch (error) {
        return response.buildFailureResponse(false, null, error.message);
    }
}

/**
 * delete student information 
 */
let _deleteData = async (studentInfo) => {
    let query = "Delete From student where id=" + studentInfo;
    return await DatabaseService.select(query);
}

module.exports = {
    storedata: _storeData,
    deleteData: _deleteData,
}
