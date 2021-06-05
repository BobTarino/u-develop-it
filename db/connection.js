const mysql = require('mysql2');

// Connect to database // variable db holds connection
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Bobcatthedawg10*',
    database: 'election'
});

module.exports = db;
