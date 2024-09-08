"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleWare = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./src/routes/auth"));
const express_session_1 = __importDefault(require("express-session"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
exports.sessionMiddleWare = (0, express_session_1.default)({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
});
app.set("trust proxy", 1);
app.use(exports.sessionMiddleWare);
app.get('/', (req, res) => {
    res.send('Hello World Faaaaaaaaaaar!');
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.use("/api/auth", auth_1.default);
