"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkDiscount_1 = require("../../controller/service/checkDiscount");
const getAllCar_1 = require("../../controller/service/getAllCar");
const getAllDiscount_1 = require("../../controller/service/getAllDiscount");
const getAllProtectionPlans_1 = require("../../controller/service/getAllProtectionPlans");
const getCommentByCar_1 = require("../../controller/service/getCommentByCar");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router Service is ok");
});
router.post("/checkDiscount", checkDiscount_1.checkDiscount);
router.get("/getAllCar", getAllCar_1.getAllCar);
router.get("/getAllDiscount", getAllDiscount_1.getAllDiscount);
router.get("/getAllProtectionPlans", getAllProtectionPlans_1.getAllProtectionPlans);
router.get("/getCommentByCar", getCommentByCar_1.getCommentByCar);
exports.default = router;
