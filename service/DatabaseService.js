var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'liviano'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    connection.query("SELECT * FROM employee", function (err, result, fields) {
        if (err) {
            throw err;
        }
    });
});

/**
 * Fire given select query and return result
 * @param {*} query 
 */
let _select = (query) => {
    return new Promise(function (resolve, reject) {
        connection.query(
            query,
            function (err, rows) {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined"));
                } else {
                    resolve(rows);
                }
            }
        )
    });
}

module.exports = {
    select: _select,
};