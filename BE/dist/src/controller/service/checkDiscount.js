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
exports.checkDiscount = checkDiscount;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function checkDiscount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/service/checkDiscount");
        const { promoCode, price, address } = req.body;
        try {
            const checkDiscount = yield prisma_1.default.discount.findUnique({
                where: {
                    promoCode: promoCode
                },
            });
            if (!checkDiscount) {
                return res
                    .status(200)
                    .json({
                    msg: "Discount not found",
                });
            }
            if (price >= checkDiscount.minimunRent
                && checkDiscount.addressDiscount.includes(address)) {
                return res.status(200).json({ discount: checkDiscount.discountRent, msg: "Discount is correct" });
            }
            else {
                return res.status(200).json({ msg: "Discount does not apply to this car" });
            }
        }
        catch (e) {
            next(e);
        }
    });
}
