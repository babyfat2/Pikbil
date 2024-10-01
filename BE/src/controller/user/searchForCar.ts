import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function searchForCar(
    req: any,
    res: Response,
    next: NextFunction
) {
    console.log("🚀 ~ file: src/controler/user/searchForCar");
    const ownerId = req.user.id;
    const  query  = req.query.query;
    console.log(query)
    try {
        const car = await prisma.car.findMany({
            where: {
                OR: [
                    {
                        name: { contains: query?.toString(), mode: 'insensitive' }
                    },
                    {
                        address: { contains: query?.toString(), mode: 'insensitive' }
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
        })
        return res.status(200).json(car);
    } catch (e: any) {
        next(e);
    }
}
