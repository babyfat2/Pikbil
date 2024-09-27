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
exports.updateStarCar = updateStarCar;
const prisma_1 = __importDefault(require("../lib/prisma"));
function updateStarCar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/autoUpdate/updateStarCar");
        try {
            const carId = yield prisma_1.default.car.findMany({
                select: {
                    id: true,
                }
            });
            carId.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                const aggregations = yield prisma_1.default.comment.aggregate({
                    _avg: {
                        star: true,
                    },
                    where: {
                        carId: e.id,
                    }
                });
                const updateCar = yield prisma_1.default.car.update({
                    data: {
                        avgStar: aggregations._avg.star,
                    },
                    where: {
                        id: e.id,
                    }
                });
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
