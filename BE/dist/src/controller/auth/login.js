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
exports.login = login;
const auth_1 = require("../../middleware/auth");
const prisma_1 = __importDefault(require("../../lib/prisma"));
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/auth/login");
        const { email, password } = req.body;
        const formattedEmail = email.toLowerCase();
        try {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    email: formattedEmail,
                },
                select: {
                    password: true,
                    id: true,
                    email: true,
                    fullname: true,
                    avatar: true,
                },
            });
            if (user) {
                const { id, email, fullname, avatar, } = user;
                if (yield (0, auth_1.compareHashedPassword)(password, user.password)) {
                    const token = (0, auth_1.createJWT)({
                        email,
                        id: user.id,
                    });
                    req.session.token = token;
                    return res.status(200).json({
                        token,
                        data: {
                            id,
                            email,
                            fullname,
                            avatar,
                        },
                        msg: "login success",
                    });
                }
                return res
                    .status(401)
                    .json({ msg: "User Name or Password is incorrect" });
            }
            return res.status(401).json({ msg: "User Name or Password is incorrect" });
        }
        catch (e) {
            next(e);
        }
    });
}
