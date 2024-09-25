"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMyRoomChat_1 = require("../../controller/chat/getMyRoomChat");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router Chat is ok");
});
router.get("/getMyRoomChat", getMyRoomChat_1.getMyRoomChat);
exports.default = router;
