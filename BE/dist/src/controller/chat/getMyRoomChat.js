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
exports.getMyRoomChat = getMyRoomChat;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function getMyRoomChat(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/chat/getMyRoomChat");
        const userId = req.user.id;
        try {
            const chat = yield prisma_1.default.chat.findMany({
                where: {
                    OR: [
                        { senderId: userId },
                        { receiverId: userId },
                    ]
                },
                orderBy: {
                    createdAt: "desc",
                },
                distinct: ["roomId"],
                select: {
                    roomId: true,
                }
            });
            const dataMessage = new Array();
            for (const element of chat) {
                const roomChat = yield prisma_1.default.chat.findMany({
                    where: {
                        roomId: element.roomId,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 20,
                    select: {
                        id: true,
                        message: true,
                        imageUri: true,
                        createdAt: true,
                        sender: {
                            select: {
                                id: true,
                                fullname: true,
                                avatar: true,
                            }
                        },
                        receiver: {
                            select: {
                                id: true,
                                fullname: true,
                                avatar: true,
                            }
                        }
                    }
                });
                dataMessage.push({ roomId: element.roomId, arrayMessage: roomChat });
            }
            ;
            return res.status(200).json(dataMessage);
        }
        catch (e) {
            next(e);
        }
    });
}
