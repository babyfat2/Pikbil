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
exports.changeAvatar = changeAvatar;
const uploadImage_1 = require("./uploadImage");
const prisma_1 = __importDefault(require("../../lib/prisma"));
function changeAvatar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/user/changeAvatar");
        const a = req.file;
        const userId = req.user.id;
        const fullname = req.body.fullname;
        try {
            const avatar = (yield (0, uploadImage_1.uploadImage)(a.path)).toString();
            console.log(avatar);
            const updateUser = yield prisma_1.default.user.update({
                where: {
                    id: userId,
                },
                data: {
                    avatar: avatar,
                    fullname: fullname,
                },
                select: {
                    password: true,
                    id: true,
                    email: true,
                    fullname: true,
                    avatar: true,
                }
            });
            return res.status(200).json({ data: updateUser });
        }
        catch (e) {
            next(e);
        }
    });
}
