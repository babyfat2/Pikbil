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
Object.defineProperty(exports, "__esModule", { value: true });
const joinChat = (socket, io) => {
    socket.on('joinChat', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('New message: ', data.userChatId);
        // Người dùng join room
        socket.to("FkQzx_tMWfm2OCrQAAAH").emit("reciveMessange", data);
    }));
};
exports.default = joinChat;
