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
exports.createChat = createChat;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function createChat(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/caht/addChat");
        const zoomId = req.body.roomId;
        try {
            const message = yield prisma_1.default.chat.create({
                data: {
                    message: "abc",
                    senderId: "66dc86cae7fc58314f136b15",
                    receiverId: "66dc84a49632229f16236521",
                    zoomId: "66f1217a9d504ff57cc8d02c",
                }
            });
            return res.status(200).json(message);
        }
        catch (e) {
            next(e);
        }
    });
}
