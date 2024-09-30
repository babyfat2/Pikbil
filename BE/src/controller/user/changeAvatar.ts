import { NextFunction, Response, } from "express";

export async function changeAvatar(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/changeAvatar");
  const a = req.file;
  const b = req.body.name;
  console.log(b);
  try {
    
  } catch (e: any) {
    next(e);
  }
}
