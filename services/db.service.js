const mysql = require('mysql2/promise');
const config = require('config');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool(config.get('dbConfig'));

module.exports = pool;