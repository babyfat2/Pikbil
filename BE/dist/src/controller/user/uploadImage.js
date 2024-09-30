"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// Hàm tải file lên Firebase Storage
const firebaseConfig = {
    apiKey: "AIzaSyALU-DJTWgZlYD4Qs8yiQqMjjBupMeSOcI",
    authDomain: "pikbil-2617a.firebaseapp.com",
    projectId: "pikbil-2617a",
    storageBucket: "pikbil-2617a.appspot.com",
    messagingSenderId: "362678991964",
    appId: "1:362678991964:web:56fcfa011d6e018397ba99",
    measurementId: "G-T9K3HNC7W3"
};
firebase_admin_1.default.initializeApp(firebaseConfig);
const uploadImage = (imageUri) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = imageUri.substring(imageUri.lastIndexOf('/'));
    console.log(imageUri);
    const bucket = firebase_admin_1.default.storage().bucket();
    const file = bucket.file(`image/${filename}`);
    const uploadFile = bucket.upload(imageUri);
    try {
        return filename;
    }
    catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Unable to upload image");
    }
});
exports.uploadImage = uploadImage;
