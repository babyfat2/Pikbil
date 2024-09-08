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
exports.addCar = addCar;
const prisma_1 = __importDefault(require("../../lib/prisma"));
function addCar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: src/controler/actions/addCar");
        const idUser = req.user.id;
        const { name, description, fuel, interiorColor, kilometers, seats, transmission, price, } = req.body;
        try {
            const car = yield prisma_1.default.car.create({
                data: {
                    name: name,
                    desciption: description,
                    fuel: fuel,
                    interiorColor: interiorColor,
                    kilometers: kilometers,
                    seats: seats,
                    transmission: transmission,
                    price: price,
                    owner: {
                        connect: {
                            id: idUser,
                        }
                    }
                }
            });
            if (car) {
                return res.status(200).json({ car });
            }
            else {
                return res.status(401).json(" Create car fail.");
            }
        }
        catch (e) {
            next(e);
        }
    });
}
