import { NextFunction, Response, Request } from "express";
import prisma from "../../lib/prisma";
export async function getCommentByCar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/service/getCommentByCar");
  const carId = req.query.carId;
  try {
    const comment = await prisma.comment.findMany({
      where: {
        carId: carId,
      },
      select: {
        id: true,
        description: true,
        user: {
          select: {
            fullname: true,
            email: true,
            avatar: true,
          }
        },
        star: true,
        createdAt: true,
      },
      take: 2,
    })
    return res.status(200).json(comment);
  } catch (e: any) {
    next(e);
  }
}
