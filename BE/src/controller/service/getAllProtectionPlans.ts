import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function getAllProtectionPlans(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/service/getAllProtectionPlans");
  try {
    const protectionPlans = await prisma.protection.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
      }
    })
    return res.status(200).json(protectionPlans);
  } catch (e: any) {
    next(e);
  }
}
