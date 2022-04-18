"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var labs_controller_1 = __importDefault(require("../controllers/labs.controller"));
var getAllLaboratories = labs_controller_1.default.getAllLaboratories, updateLaboratory = labs_controller_1.default.updateLaboratory, getSingleLaboratory = labs_controller_1.default.getSingleLaboratory;
var router = (0, express_promise_router_1.default)();
router.get('/', getAllLaboratories);
router.get('/:id', getSingleLaboratory);
router.put('/:id', updateLaboratory);
exports.default = router;
