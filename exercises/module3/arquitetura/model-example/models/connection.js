// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'lucas',
    password: 'lfplfp123',
    database: 'model_example' });

module.exports = connection;