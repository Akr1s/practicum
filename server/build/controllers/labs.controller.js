"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCodes_1 = require("../constants/statusCodes");
var common_1 = require("../helpers/common");
var getAllLaboratories = function (req, res) {
    var id = req.params.id;
    var options = {
        query: "SELECT * FROM LABS ORDER BY ID ASC",
        errorCode: statusCodes_1.STATUS_CODES.ERROR,
        single: false,
    };
    (0, common_1.getDataFromDatabase)(options, res);
};
var getSingleLaboratory = function (req, res) {
    var id = req.params.id;
    var options = {
        query: "SELECT * FROM LABS WHERE ID='" + id + "'",
        errorCode: statusCodes_1.STATUS_CODES.ERROR,
        single: true,
    };
    (0, common_1.getDataFromDatabase)(options, res);
};
var updateLaboratory = function (req, res) {
    var id = req.params.id;
    var _a = req.body, name = _a.name, data = _a.data;
    var options = {
        query: {
            text: "UPDATE LABS SET NAME = $1, DATA = $2 WHERE ID = $3 RETURNING *",
            values: [name, JSON.stringify(data), id],
        },
        successStatusCode: statusCodes_1.STATUS_CODES.OK,
        errorStatusCode: statusCodes_1.STATUS_CODES.ERROR,
    };
    (0, common_1.handleDatabaseQuery)(options, res);
};
exports.default = {
    getAllLaboratories: getAllLaboratories,
    updateLaboratory: updateLaboratory,
    getSingleLaboratory: getSingleLaboratory,
};
