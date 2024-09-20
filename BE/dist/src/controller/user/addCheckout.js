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
exports.addCheckout = addCheckout;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function addCheckout(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/user/addCheckout");
        const renterId = req.user.id;
        const { carId, price, status, dateRent } = req.body;
        try {
            const checkout = yield prisma_1.default.checkout.create({
                data: {
                    price: price,
                    status: status,
                    dateRent: dateRent,
                    car: {
                        connect: {
                            id: carId,
                        }
                    },
                    renter: {
                        connect: {
                            id: renterId,
                        }
                    },
                }
            });
            if (checkout) {
                return res
                    .status(200)
                    .json({
                    data: checkout,
                    msg: "Add checkout success",
                });
            }
        }
        catch (e) {
            next(e);
        }
    });
}
