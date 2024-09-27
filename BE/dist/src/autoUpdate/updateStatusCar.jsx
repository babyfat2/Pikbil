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
exports.updateStatusCheckout = updateStatusCheckout;
const prisma_1 = __importDefault(require("../lib/prisma"));
function updateStatusCheckout() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/autoUpdate/updateStarCheckout");
        try {
            const checkout = yield prisma_1.default.checkout.findMany({
                select: {
                    id: true,
                    dateRent: true,
                    status: true,
                }
            });
            checkout.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                const datenow = new Date();
                console.log(datenow);
                if (e.dateRent >= datenow && e.status === "Ongoing") {
                    const updateCheckout = yield prisma_1.default.checkout.update({
                        where: {
                            id: e.id,
                        },
                        data: {
                            status: "Completed",
                        }
                    });
                }
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
