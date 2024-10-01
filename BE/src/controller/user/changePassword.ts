import { NextFunction, Response, } from "express";
import { compareHashedPassword, createHashedPassword, } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function changePassword(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/changePassword");
  const id = req.user.id;
  const { oldPassword, newPassword }: { oldPassword: string, newPassword: string } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        password: true,
      }
    })
    if (user && await compareHashedPassword(oldPassword, user.password)) {
      const changePassword = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          password: await createHashedPassword(newPassword),
        }
      })
      return res
        .status(200)
        .json({
          msg: "Change password success",
        })
    }
    return res
        .status(400)
        .json({
          msg: "Password incorrect",
        })
  } catch (e: any) {
    next(e);
  }
}
