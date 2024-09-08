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
exports.updateProfile = updateProfile;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function updateProfile(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/user/updateProfile");
        const id = req.user.id;
        const { fullname, address } = req.body;
        try {
            const user = yield prisma_1.default.user.update({
                where: {
                    id: id,
                },
                data: {
                    fullname: fullname,
                    address: address,
                }
            });
            if (user) {
                return res
                    .status(200)
                    .json({
                    data: user,
                    msg: "Change Profile success",
                });
            }
        }
        catch (e) {
            next(e);
        }
    });
}
