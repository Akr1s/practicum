"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var subjets_controller_1 = __importDefault(require("../controllers/subjets.controller"));
var getAllSubjects = subjets_controller_1.default.getAllSubjects;
var router = (0, express_promise_router_1.default)();
router.get('/', getAllSubjects);
exports.default = router;
