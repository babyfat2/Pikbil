import { NextFunction, Response, } from "express";
import { createHashedPassword, } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function changePassword(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/changePassword");
  const id = req.user.id;
  const { password }: { password: string } = req.body;
  try {
    const user = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            password: await createHashedPassword(password),
        }
    })
    if (user) {
        return res
        .status(200)
        .json({ 
            data: user, 
            msg: "Change password success",
        })
    }
  } catch (e: any) {
    next(e);
  }
}
