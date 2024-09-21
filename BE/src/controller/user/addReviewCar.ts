import { NextFunction, Response, } from "express";
import { createHashedPassword, } from "../../middleware/auth";
import prisma from "../../lib/prisma";
import { connect } from "http2";
export async function addReviewCar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/addReviewCar");
  const userId = req.user.id;
  const {description, star, carId} : {description: string, star: number, carId: string} = req.body;
  try {
    const review = await prisma.comment.create({
        data: {
            userId: userId,
            description: description,
            star: star,
            carId: carId
        }
    })
    return res.status(200).json({ "msg": "add Reiview success"});
  } catch (e: any) {
    next(e);
  }
}