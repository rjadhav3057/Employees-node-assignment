var express = require('express');
var bodyParser = require('body-parser');
var Response = require('../Response');
var cors = require('cors');
var app = express();

let EmployeeService = require("../service/EmployeeService");
let DepartmentService = require("../service/DepartmentService");
let LeaveService = require("../service/LeaveService");
let StudentService = require("../service/StudentService");

// 
app.use(cors());

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// 
app.listen(9000);

/**
 * get department data 
 */
app.get('/department/get', async function (req, res) {
    let getAllDepartment = await DepartmentService.getAll();
    res.send(getAllDepartment);
});

/**
 * 
 */
app.get('/leave/get', async function (req, res) {
    let getAllLeave = await LeaveService.getAll();
    res.send(getAllLeave);
});

/**
 * get all employee information from the database
 */
app.get('/employee/get', async function (req, res) {
    let getAllEmployee = await EmployeeService.getAll();
    res.send(getAllEmployee);
});

/**
 * get particular employee information from database
 */
app.get('/employee/:empId', async function (req, res) {
    const empId = req.params.empId;
    let SearchByid = await EmployeeService.searchById(empId);
    res.send(SearchByid);
});

/**
 * insert employee informartion into the database
 */
app.post('/employee/save', async function (req, res) {
    const employeeInfo = req.body;
    let Storedata = await EmployeeService.storeData(employeeInfo);
    res.send(Storedata);
});

/**
 * delete particular employee information from the database
 */
app.post('/employee/delete/byid', async function (req, res) {
    const empId = req.body.emp_id;
    let DeleteEmployeeInfo = await EmployeeService.deleteById(empId);
    res.send(DeleteEmployeeInfo);
});

/**
 * delete all employee information from the database
 */
app.delete('/employee/delete', async function (req, res) {
    let DeleteEmployeeInfo = await EmployeeService.deleteData();
    res.send(DeleteEmployeeInfo);
});

/**
 * update employee information
 */
app.post('/employee/update', async function (req, res) {
    const employeeInfo = req.body;
    let DeleteEmployeeInfo = await EmployeeService.updateData(employeeInfo);
    res.send(DeleteEmployeeInfo);
});

/**
 * store student information into the database
 */
app.post('/student/save', async function (req, res) {
    const studentInfo = req.body
    let StoreStudentInfo = await StudentService.storedata(studentInfo);
    res.send(StoreStudentInfo);
});

/**
 * delete student Information
 */
app.delete('/student/delete/:id', async function (req, res) {
    const studentInfo = req.params.id;
    let DeleteStudentInfo = await StudentService.deleteData(studentInfo);
    res.send(DeleteStudentInfo);
});