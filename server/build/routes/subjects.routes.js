"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var subjets_controller_1 = __importDefault(require("../controllers/subjets.controller"));
var getAllSubjects = subjets_controller_1.default.getAllSubjects, createSubject = subjets_controller_1.default.createSubject, updateSubject = subjets_controller_1.default.updateSubject, deleteSubject = subjets_controller_1.default.deleteSubject;
var router = (0, express_promise_router_1.default)();
router.get('/', getAllSubjects);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);
exports.default = router;
