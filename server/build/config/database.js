"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseQuery = void 0;
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
pool.on('connect', function () {
    console.log('Connection successful');
});
var databaseQuery = function (text, params) { return pool.query(text, params); };
exports.databaseQuery = databaseQuery;
