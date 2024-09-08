import { NextFunction, Response, } from "express";
import prisma from "../../lib/prisma";
export async function addCar(
    req: any,
    res: Response,
    next: NextFunction
) {
    console.log("🚀 ~ file: src/controler/actions/addCar");
    const idUser = req.user.id;
    const {
        name,
        description,
        fuel,
        interiorColor,
        kilometers,
        seats,
        transmission,
        price,
    }: {
        name: string,
        description: string,
        fuel: string,
        interiorColor: string,
        kilometers: string,
        seats: string,
        transmission: string,
        price: string,
    } = req.body;
    try {
        const car = await prisma.car.create({
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
        })
        if (car) {
            return res.status(200).json({ car });
        } else {
            return res.status(401).json(" Create car fail.");
        }
    } catch (e: any) {
        next(e);
    }
}
