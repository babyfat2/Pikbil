import { NextFunction, Response, Request } from "express";
import { compareHashedPassword, createJWT } from "../../middleware/auth";
import prisma from "../../lib/prisma";
export async function checkDiscount(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/service/checkDiscount");
  const {  promoCode, price, address }: { promoCode: string,price: number, address: string } = req.body;
  try {
    const checkDiscount = await prisma.discount.findUnique({
      where: {
        promoCode: promoCode
      },
    })
    if (!checkDiscount) {
      return res
      .status(200)
      .json({  
          msg: "Discount not found",
      })
    }
    if (
      price >= checkDiscount.minimunRent 
      && checkDiscount.addressDiscount.includes(address)
    ) {
      return res.status(200).json({discount: checkDiscount.discountRent, msg: "Discount is correct"});
    } else {
      return res.status(200).json({msg: "Discount does not apply to this car"})
    }
  } catch (e: any) {
    next(e);
  }
}
