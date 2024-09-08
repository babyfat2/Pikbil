import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function getAllDiscount(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/service/getAllDiscount");
  try {
    const allDiscount = await prisma.discount.findMany({
      select: {
        id: true,
        name: true,
        promoCode: true,
        description: true,
        discountRent: true,
        minimunRent: true,
        imageUri: true,
        addressDiscount: true,
      }
    })
    return res.status(200).json({allDiscount: allDiscount});
  } catch (e: any) {
    next(e);
  }
}
