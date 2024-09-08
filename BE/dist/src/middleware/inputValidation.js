"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.signupValidation = void 0;
const express_validator_1 = require("express-validator");
exports.signupValidation = [
    (0, express_validator_1.body)("fullname")
        .exists()
        .withMessage("Full name is required.")
        .isString()
        .withMessage("Full name must be a string.")
        .isLength({ min: 1 })
        .withMessage("Full name is required."),
    (0, express_validator_1.body)("email")
        .custom((value) => {
        if (value.includes(" ")) {
            throw new Error("Spaces are not allowed in the Email address.");
        }
        return true;
    })
        .exists()
        .withMessage("Email is required.")
        .isLength({ min: 1 })
        .withMessage("Email is required.")
        .isString()
        .withMessage("Email must be a string."),
    (0, express_validator_1.body)("password")
        .exists()
        .withMessage("Password is required.")
        .isLength({ min: 1 })
        .withMessage("Password is required")
        .isStrongPassword()
        .withMessage("Password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and symbols."),
];
exports.loginValidation = [
    (0, express_validator_1.body)("email")
        .custom((value) => {
        if (value.includes(" ")) {
            throw new Error("Spaces are not allowed in the email.");
        }
        return true;
    })
        .exists()
        .withMessage("Email address is required.")
        .isLength({ min: 1 })
        .withMessage("Email address is required."),
    (0, express_validator_1.body)("password")
        .exists()
        .withMessage("Password is required.")
        .isLength({ min: 1 })
        .withMessage("Password is required")
        .isLength({ max: 15, min: 2 })
        .withMessage("Password must be between 2 and 15 characters long."),
];
