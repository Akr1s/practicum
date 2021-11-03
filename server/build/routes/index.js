"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subjects_routes_1 = __importDefault(require("./subjects.routes"));
var express_1 = require("express");
var router = (0, express_1.Router)();
router.use('/subjects/', subjects_routes_1.default);
exports.default = router;
