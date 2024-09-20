"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateProfile_1 = require("../../controller/user/updateProfile");
const changePassword_1 = require("../../controller/user/changePassword");
const addCheckout_1 = require("../../controller/user/addCheckout");
const getMyTrip_1 = require("../../controller/user/getMyTrip");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router User is ok");
});
router.post("/updateProfile", updateProfile_1.updateProfile);
router.post("/changePassword", changePassword_1.changePassword);
router.post("/addCheckout", addCheckout_1.addCheckout);
router.get("/getMyTrip", getMyTrip_1.getMyTrip);
exports.default = router;
