"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkDiscount_1 = require("../../controller/service/checkDiscount");
const getAllCar_1 = require("../../controller/service/getAllCar");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router Service is ok");
});
router.post("/checkDiscount", checkDiscount_1.checkDiscount);
router.get("/getAllCar", getAllCar_1.getAllCar);
exports.default = router;
