import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
var pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
pool.on('connect', function () {
    console.log('Connection successful');
});
export var databaseQuery = function (text, params) { return pool.query(text, params); };
