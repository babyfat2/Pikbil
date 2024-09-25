"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockJWT = exports.protect = exports.createEmailJWT = exports.createJWT = exports.compareHashedPassword = exports.createHashedPassword = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createHashedPassword = (password) => {
    return bcrypt_1.default.hash(password, 5);
};
exports.createHashedPassword = createHashedPassword;
const compareHashedPassword = (password, hashPassword) => {
    return bcrypt_1.default.compare(password, hashPassword);
};
exports.compareHashedPassword = compareHashedPassword;
const createJWT = (user) => {
    const token = jsonwebtoken_1.default.sign({ email: user.email, id: user.id, }, process.env.SECRET || "");
    return token;
};
exports.createJWT = createJWT;
const createEmailJWT = (email) => {
    const token = jsonwebtoken_1.default.sign({ email }, process.env.SECRET || "", { expiresIn: "1h" });
    return token;
};
exports.createEmailJWT = createEmailJWT;
const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    const [, token] = bearer.split(" ");
    if (!token) {
        return res.status(401).json({ msg: "invalid token" });
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.SECRET || "");
        req.user = user;
        req.token = token;
        next();
    }
    catch (e) {
        console.error(e);
        return res.status(401).json({ msg: "invalid token" });
    }
};
exports.protect = protect;
const blockJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bearer = req.headers.authorization;
    const tokenFromSession = req.session.token;
    if (!tokenFromSession) {
        return res.status(401).json({ msg: "Session Expired" });
    }
    if (!bearer) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    const [, token] = bearer.split(" ");
    if (!token) {
        return res.status(401).json({ msg: "invalid token" });
    }
    if (token !== tokenFromSession) {
        return res.status(401).json({ msg: "invalid token" });
    }
    next();
});
exports.blockJWT = blockJWT;
