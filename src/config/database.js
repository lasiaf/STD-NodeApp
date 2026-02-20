const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_db',
    password: 'newera',
    port: 5432,
});

module.exports = pool;