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
const prisma_1 = __importDefault(require("../../lib/prisma"));
const chatEvents = (socket, io) => {
    socket.on('sendMessage', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('New message: ', data.roomId);
        const message = yield prisma_1.default.chat.create({
            data: {
                message: data.message,
                senderId: socket.data.userId,
                receiverId: data.receiverId,
                roomId: data.roomId,
            },
            select: {
                id: true,
                message: true,
                imageUri: true,
                createdAt: true,
                roomId: true,
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
        console.log(message);
        io.to(data.receiverId).emit("reciveMessage", { message: message });
        io.to(socket.data.userId).emit("reciveMessage", { message: message });
    }));
};
exports.default = chatEvents;
