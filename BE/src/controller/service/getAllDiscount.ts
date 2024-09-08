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
    const discount = await prisma.discount.findMany({
    })
    return discount;
  } catch (e: any) {
    next(e);
  }
}
