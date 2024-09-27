"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMyRoomChat_1 = require("../../controller/chat/getMyRoomChat");
const getChatById_1 = require("../../controller/chat/getChatById");
const firstMessage_1 = require("../../controller/chat/firstMessage");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router Chat is ok");
});
router.get("/getMyRoomChat", getMyRoomChat_1.getMyRoomChat);
router.get("/getChatById", getChatById_1.getChatById);
router.post("/firstMessage", firstMessage_1.firstMessage);
exports.default = router;
