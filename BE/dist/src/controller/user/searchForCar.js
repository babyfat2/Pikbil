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
exports.searchForCar = searchForCar;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function searchForCar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/user/searchForCar");
        const ownerId = req.user.id;
        const query = req.query.query;
        console.log(query);
        try {
            const car = yield prisma_1.default.car.findMany({
                where: {
                    OR: [
                        {
                            name: { contains: query === null || query === void 0 ? void 0 : query.toString(), mode: 'insensitive' }
                        },
                        {
                            address: { contains: query === null || query === void 0 ? void 0 : query.toString(), mode: 'insensitive' }
                        }
                    ],
                    NOT: {
                        ownerId: ownerId,
                    }
                },
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
                }
            });
            return res.status(200).json(car);
        }
        catch (e) {
            next(e);
        }
    });
}
