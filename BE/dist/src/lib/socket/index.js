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
const socket_io_1 = require("socket.io");
const __1 = require("../../..");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const chatEvents_1 = __importDefault(require("../../controller/chat/chatEvents"));
const prisma_1 = __importDefault(require("../prisma"));
const joinRoom_1 = __importDefault(require("../../controller/chat/joinRoom"));
const leaveRoom_1 = __importDefault(require("../../controller/chat/leaveRoom"));
function configureSocket(server) {
    const io = new socket_io_1.Server(server);
    io.engine.use(__1.sessionMiddleWare);
    io.use((socket, next) => __awaiter(this, void 0, void 0, function* () {
        //@ts-ignore
        var _a, _b;
        const token = (_b = (_a = socket.handshake) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.token;
        if (!token) {
            return next(new Error("Not authorized"));
        }
        const user = jsonwebtoken_1.default.verify(token, process.env.SECRET || "");
        if (user) {
            const update = yield prisma_1.default.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    socket: socket.id,
                }
            });
            socket.data.userId = user.id;
            socket.data.userName = user.email;
            return next();
        }
        next(new Error("Not authorized"));
    }));
    io.on("connection", (socket) => __awaiter(this, void 0, void 0, function* () {
        (0, chatEvents_1.default)(socket, io);
        (0, joinRoom_1.default)(socket, io);
        (0, leaveRoom_1.default)(socket, io);
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    }));
}
exports.default = configureSocket;
