import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function getTopCar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/service/getTopCar");
  try {
    const topCar = await prisma.car.findMany({
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
  } catch (e: any) {
    next(e);
  }
}
