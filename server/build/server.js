"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
var express_session_1 = __importDefault(require("express-session"));
var auth_1 = require("./config/auth");
var auth_router_1 = __importDefault(require("./routes/auth.router"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var environmentPort = Number(process.env.PORT);
var port = environmentPort || 8080;
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use((0, cors_1.default)());
app.use((0, express_session_1.default)({
    secret: auth_1.config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));
app.use('/api/', routes_1.default);
app.use('/auth/', auth_router_1.default);
app.listen(port);
