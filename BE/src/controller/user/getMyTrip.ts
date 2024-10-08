import { NextFunction, Response, } from "express";
import { createHashedPassword, } from "../../middleware/auth";
import prisma from "../../lib/prisma";
import { connect } from "http2";
export async function getMyTrip(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/getMyTrip");
  const userId = req.user.id;
  try {
    const myTrip = await prisma.checkout.findMany({
      where: {
        renterId: userId
      },
      select: {
        id: true,
        car: {
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
        imageUri: true,
        address: true,
        owner: {
          select: {
            id: true,
            fullname: true,
            avatar: true,
          }
        },
          }
        },
        status: true,
        dateRent: true,
        createdAt: true,
      }
    })
    return res.status(200).json(myTrip)
  } catch (e: any) {
    next(e);
  }
}
