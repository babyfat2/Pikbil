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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const firebase_1 = require("../../lib/firebase");
const uploadImage = (imageUri) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [uploadFile] = yield firebase_1.bucket.upload(imageUri);
        const url = yield uploadFile.getSignedUrl({
            action: 'read', // Hành động là 'read' để tạo URL có thể đọc
            expires: '03-01-2500', // Ngày hết hạn của URL
        });
        return url[0];
    }
    catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Unable to upload image");
    }
});
exports.uploadImage = uploadImage;
