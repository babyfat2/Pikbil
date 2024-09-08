"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createCar_1 = require("../../controller/car/createCar");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("car is ok");
});
router.post("/createCar", createCar_1.createCar);
exports.default = router;
