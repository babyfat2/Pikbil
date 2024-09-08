import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function getAllCar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/service/getAllCar");
  try {
    const car = await prisma.car.findMany({
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
      }
    })
    return res.status(200).json({ allCar: car });
  } catch (e: any) {
    next(e);
  }
}
