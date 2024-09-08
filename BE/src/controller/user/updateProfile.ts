import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function updateProfile(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/updateProfile");
  const id = req.user.id;
  const { fullname }: { fullname: string } = req.body;
  try {
    const user = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            fullname: fullname,
        }
    })
    if (user) {
        return res
        .status(200)
        .json({ 
            data: user, 
            msg: "Change Profile success",
        })
    }
  } catch (e: any) {
    next(e);
  }
}
