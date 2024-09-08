"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addCar_1 = require("../../controller/actions/addCar");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Actions is ok");
});
router.post("/addCar", addCar_1.addCar);
exports.default = router;
