"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var statusCodes_1 = require("../constants/statusCodes");
var common_1 = require("../helpers/common");
var uuid_1 = require("uuid");
var convertDate_1 = __importDefault(require("../utils/convertDate"));
var getAllLaboratories = function (req, res) {
    var id = req.params.id;
    var options = {
        query: "SELECT * FROM LABORATORIES WHERE LESSON_ID='" + id + "' ORDER BY CREATED_DATE ASC",
        errorCode: statusCodes_1.STATUS_CODES.ERROR,
        single: false,
    };
    (0, common_1.getDataFromDatabase)(options, res);
};
var createLaboratory = function (req, res) {
    var _a = req.body, name = _a.name, data = _a.data, lessonId = _a.lessonId;
    var id = (0, uuid_1.v4)();
    var options = {
        query: "INSERT INTO LABORATORIES(ID,NAME, LESSON_ID, DATA, CREATED_DATE) VALUES ('" + id + "','" + name + "', '" + lessonId + "', '" + JSON.stringify(data) + "', '" + (0, convertDate_1.default)(new Date()) + "') RETURNING *",
        successStatusCode: statusCodes_1.STATUS_CODES.CREATED,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
var updateLaboratory = function (req, res) {
    var id = req.params.id;
    var _a = req.body, name = _a.name, data = _a.data, lessonId = _a.lessonId;
    var options = {
        query: "UPDATE LABORATORIES SET NAME='" + name + "', LESSON_ID='" + lessonId + "', DATA='" + JSON.stringify(data) + "' WHERE ID='" + id + "' RETURNING *",
        successStatusCode: statusCodes_1.STATUS_CODES.OK,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
var deleteLaboratory = function (req, res) {
    var id = req.params.id;
    var options = {
        query: "DELETE FROM LABORATORIES WHERE ID='" + id + "' RETURNING *",
        successStatusCode: statusCodes_1.STATUS_CODES.OK,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
exports.default = { getAllLaboratories: getAllLaboratories, createLaboratory: createLaboratory, updateLaboratory: updateLaboratory, deleteLaboratory: deleteLaboratory };
