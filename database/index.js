const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port is 5432
    max: 10, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close clients after 30 seconds of inactivity
});

pool.connect((err) => {
    if (err) {
        console.error("Connection error", err.stack);
    } else {
        console.log("Connected successfully to PostgreSQL");
    }
});

module.exports = pool;