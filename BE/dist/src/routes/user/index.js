"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateProfile_1 = require("../../controller/user/updateProfile");
const changePassword_1 = require("../../controller/user/changePassword");
const addCheckout_1 = require("../../controller/user/addCheckout");
const getMyTrip_1 = require("../../controller/user/getMyTrip");
const addReviewCar_1 = require("../../controller/user/addReviewCar");
const changeAvatar_1 = require("../../controller/user/changeAvatar");
const multer_1 = require("../../middleware/multer");
const searchForCar_1 = require("../../controller/user/searchForCar");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Router User is ok");
});
router.post("/updateProfile", updateProfile_1.updateProfile);
router.post("/changePassword", changePassword_1.changePassword);
router.post("/changeAvatar", multer_1.upload.single("photo"), changeAvatar_1.changeAvatar);
router.post("/addCheckout", addCheckout_1.addCheckout);
router.post("/addReviewCar", addReviewCar_1.addReviewCar);
router.get("/getMyTrip", getMyTrip_1.getMyTrip);
router.get("/searchForCar", searchForCar_1.searchForCar);
exports.default = router;
