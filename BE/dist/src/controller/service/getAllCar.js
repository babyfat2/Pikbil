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
exports.getAllCar = getAllCar;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function getAllCar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/service/getAllCar");
        try {
            const car = yield prisma_1.default.car.findMany({
                select: {
                    id: true,
                    name: true,
                    desciption: true,
                    fuel: true,
                    interiorColor: true,
                    kilometers: true,
                    seats: true,
                    transmission: true,
                    price: true,
                    imageUri: true,
                    owner: {
                        select: {
                            fullname: true,
                            avatar: true,
                            address: true,
                        }
                    },
                    _count: {
                        select: {
                            comment: true,
                        }
                    }
                }
            });
            return res.status(200).json({ allCar: car });
        }
        catch (e) {
            next(e);
        }
    });
}
