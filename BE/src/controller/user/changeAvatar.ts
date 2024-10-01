import { NextFunction, Response, } from "express";
import { uploadImage } from "./uploadImage";
import prisma from "../../lib/prisma";

export async function changeAvatar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/changeAvatar");
  const a = req.file;
  const userId = req.user.id;
  const fullname = req.body.fullname;
  try {
  const avatar =  (await uploadImage(a.path)).toString();
  console.log(avatar);
  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      avatar: avatar,
      fullname: fullname,
    },
    select: {
      password: true,
        id: true,
        email: true,
        fullname: true,
        avatar: true,
    }
  })
  return res.status(200).json({data: updateUser})
  } catch (e: any) {
    next(e);
  }
}
