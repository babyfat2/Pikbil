"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkDiscount_1 = require("../../controller/service/checkDiscount");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router Service is ok");
});
router.post("/checkDiscount", checkDiscount_1.checkDiscount);
exports.default = router;
