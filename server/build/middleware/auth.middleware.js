"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserLoggedIn = exports.logAuthRequests = exports.isLoggedIn = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var auth_1 = require("../config/auth");
function isLoggedIn(req, res, next) {
    var token = req.headers.authorization || '';
    var isValid = false;
    try {
        isValid = token && jsonwebtoken_1.default.verify(token.split(' ')[1], auth_1.config.secret);
    }
    catch (_a) {
        console.error("Session expired, User: " + req.session.user + ", IP: " + req.ip + ", Path: " + req.originalUrl);
        res.status(403).send({ error: 'Session expired' });
        return;
    }
    if (isValid) {
        return next();
    }
    console.error("Session expired, User: " + req.session.user + ", IP: " + req.ip + ", Path: " + req.originalUrl);
    res.status(403).send({ error: 'Session expired' });
}
exports.isLoggedIn = isLoggedIn;
function logAuthRequests(req, res, next) {
    console.warn("Email: " + req.body.email + ", IP: " + req.ip + ", Path: " + req.originalUrl);
    return next();
}
exports.logAuthRequests = logAuthRequests;
function isUserLoggedIn(req) {
    var token = req.headers.authorization || '';
    var isValid = false;
    try {
        isValid = token && jsonwebtoken_1.default.verify(token.split(' ')[1], auth_1.config.secret);
    }
    catch (_a) {
        console.error("Session expired, User: " + req.session.user + ", IP: " + req.ip + ", Path: " + req.originalUrl);
        throw new Error('Token validation error');
    }
    return !!isValid;
}
exports.isUserLoggedIn = isUserLoggedIn;
