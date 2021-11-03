"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllSubjects = function (req, res) {
    res.send('Routes work!');
    // const options = {
    //     query: 'SELECT * FROM CATEGORIES ORDER BY CREATED_DATE ASC',
    //     errorCode: STATUS_CODES.ERROR,
    //     single: false,
    // };
    // getDataFromDatabase(options, res);
};
exports.default = { getAllSubjects: getAllSubjects };
