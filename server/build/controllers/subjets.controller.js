"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var statusCodes_1 = require("../constants/statusCodes");
var common_1 = require("../helpers/common");
var uuid_1 = require("uuid");
var convertDate_1 = __importDefault(require("../utils/convertDate"));
var getAllSubjects = function (req, res) {
    var options = {
        query: 'SELECT * FROM LESSONS ORDER BY CREATED_DATE ASC',
        errorCode: statusCodes_1.STATUS_CODES.ERROR,
        single: false,
    };
    (0, common_1.getDataFromDatabase)(options, res);
};
var createSubject = function (req, res) {
    var name = req.body.name;
    var id = (0, uuid_1.v4)();
    var options = {
        query: "INSERT INTO LESSONS(ID,NAME,CREATED_DATE) VALUES ('" + id + "','" + name + "', '" + (0, convertDate_1.default)(new Date()) + "') RETURNING *",
        successStatusCode: statusCodes_1.STATUS_CODES.CREATED,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
var updateSubject = function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var options = {
        query: "UPDATE LESSONS SET NAME='" + name + "' WHERE ID='" + id + "' RETURNING *",
        successStatusCode: statusCodes_1.STATUS_CODES.OK,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
var deleteSubject = function (req, res) {
    var id = req.params.id;
    var options = {
        query: "DELETE FROM LESSONS WHERE ID='" + id + "' RETURNING *",
        successStatusCode: statusCodes_1.STATUS_CODES.OK,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
exports.default = { getAllSubjects: getAllSubjects, createSubject: createSubject, updateSubject: updateSubject, deleteSubject: deleteSubject };
