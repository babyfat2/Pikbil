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
exports.getTopCar = getTopCar;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function getTopCar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/service/getTopCar");
        try {
            const topCar = yield prisma_1.default.car.findMany({
                select: {
                    id: true,
                    name: true,
                    description: true,
                    fuel: true,
                    interiorColor: true,
                    kilometers: true,
                    seats: true,
                    transmission: true,
                    price: true,
                    status: true,
                    imageUri: true,
                    address: true,
                    avgStar: true,
                    owner: {
                        select: {
                            id: true,
                            fullname: true,
                            avatar: true,
                        }
                    },
                },
                orderBy: {
                    avgStar: "desc",
                },
                take: 5,
            });
            return res.status(200).json(topCar);
        }
        catch (e) {
            next(e);
        }
    });
}
