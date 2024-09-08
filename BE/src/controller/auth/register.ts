import { NextFunction, Request, Response } from "express";
import { createHashedPassword } from "../../middleware/auth";
import prisma from "../../lib/prisma";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/auth/register");
  const {
    email,
    password,
    fullname,
  }: { email: string; password: string; fullname: string } =
    req.body;

  const formattedEmail = email.toLowerCase();
  try {
    //check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
            email: formattedEmail,
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(401).json({ msg: "Email already exists" });
      }
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        password: await createHashedPassword(password),
        fullname: fullname,
      },
    });

    if (user) {
      return res.status(200).json({ msg: "Account created" });
    }
    return res.status(400).json({ msg: "error" });
  } catch (e: any) {
    next(e);
  }
}
