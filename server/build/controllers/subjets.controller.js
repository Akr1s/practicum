"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCodes_1 = require("../constants/statusCodes");
var common_1 = require("../helpers/common");
var uuid_1 = require("uuid");
var getAllSubjects = function (req, res) {
    var options = {
        query: 'SELECT * FROM LESSONS',
        errorCode: statusCodes_1.STATUS_CODES.ERROR,
        single: false,
    };
    (0, common_1.getDataFromDatabase)(options, res);
};
var createSubject = function (req, res) {
    var name = req.body.name;
    var id = (0, uuid_1.v4)();
    var options = {
        query: "INSERT INTO LESSONS(ID,NAME) VALUES ('" + id + "','" + name + "') RETURNING *",
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
