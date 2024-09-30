import { NextFunction, Response, } from "express";
import { createHashedPassword, } from "../../middleware/auth";
import prisma from "../../lib/prisma";
import { uploadImage } from "./uploadImage";
export async function changeAvatar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/changeAvatar");
  const id = req.user.id;
  const { imageUri }: { imageUri: string } = req.body;
  try {
    console.log(uploadImage(imageUri))
  } catch (e: any) {
    next(e);
  }
}
