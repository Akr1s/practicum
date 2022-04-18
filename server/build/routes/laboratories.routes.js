"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var laboratories_controlles_1 = __importDefault(require("../controllers/laboratories.controlles"));
var getAllLaboratories = laboratories_controlles_1.default.getAllLaboratories, createLaboratory = laboratories_controlles_1.default.createLaboratory, updateLaboratory = laboratories_controlles_1.default.updateLaboratory, deleteLaboratory = laboratories_controlles_1.default.deleteLaboratory, getSingleLaboratory = laboratories_controlles_1.default.getSingleLaboratory;
var router = (0, express_promise_router_1.default)();
router.get('/:id', getAllLaboratories);
router.get('/single/:id', getSingleLaboratory);
router.post('/', createLaboratory);
router.put('/:id', updateLaboratory);
router.delete('/:id', deleteLaboratory);
exports.default = router;
