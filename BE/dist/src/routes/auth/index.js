"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inputValidation_1 = require("../../middleware/inputValidation");
const handleErrors_1 = require("../../middleware/handleErrors");
const login_1 = require("../../controller/auth/login");
const register_1 = require("../../controller/auth/register");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("auth is ok");
});
router.post("/login", inputValidation_1.loginValidation, handleErrors_1.handleErrors, login_1.login);
router.post("/register", inputValidation_1.signupValidation, handleErrors_1.handleErrors, register_1.register);
exports.default = router;
