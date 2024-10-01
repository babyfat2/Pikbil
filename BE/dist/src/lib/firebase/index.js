"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucket = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require("../../../../pikbil.json");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});
exports.bucket = firebase_admin_1.default.storage().bucket();
