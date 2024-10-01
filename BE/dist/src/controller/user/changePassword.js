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
exports.changePassword = changePassword;
const auth_1 = require("../../middleware/auth");
const prisma_1 = __importDefault(require("../../lib/prisma"));
function changePassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/user/changePassword");
        const id = req.user.id;
        const { oldPassword, newPassword } = req.body;
        try {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: id,
                },
                select: {
                    password: true,
                }
            });
            if (user && (yield (0, auth_1.compareHashedPassword)(oldPassword, user.password))) {
                const changePassword = yield prisma_1.default.user.update({
                    where: {
                        id: id,
                    },
                    data: {
                        password: yield (0, auth_1.createHashedPassword)(newPassword),
                    }
                });
                return res
                    .status(200)
                    .json({
                    msg: "Change password success",
                });
            }
            return res
                .status(400)
                .json({
                msg: "Password incorrect",
            });
        }
        catch (e) {
            next(e);
        }
    });
}
