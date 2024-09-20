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
exports.addReviewCar = addReviewCar;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function addReviewCar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/user/addReviewCar");
        const userId = req.user.id;
        const { description, star, carId } = req.body;
        try {
            const review = yield prisma_1.default.comment.create({
                data: {
                    userId: userId,
                    desciption: description,
                    star: star,
                    carId: carId
                }
            });
        }
        catch (e) {
            next(e);
        }
    });
}
