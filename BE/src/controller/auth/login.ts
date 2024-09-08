import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function login(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/auth/login");
  const { email, password }: { email: string; password: string } = req.body;
  const formattedEmail = email.toLowerCase();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: formattedEmail,
      },
      select: {
        password: true,
        id: true,
        email: true,
        fullname: true,
      },
    });

    if (user) {
      const {
        email,
        fullname,
      } = user;
      if (await compareHashedPassword(password, user.password)) {
        const token = createJWT({
          email,
          id: user.id,
        });
        req.session.token = token;
        return res.status(200).json({
          token,
          data: {
            email,
            fullname,
          },
          msg: "login success",
        });
      }
      return res
        .status(401)
        .json({ msg: "User Name or Password is incorrect" });
    }
    return res.status(401).json({ msg: "User Name or Password is incorrect" });
  } catch (e: any) {
    next(e);
  }
}
