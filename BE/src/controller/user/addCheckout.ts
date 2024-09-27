import { NextFunction, Response, } from "express";
import prisma from "../../lib/prisma";
export async function addCheckout(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/user/addCheckout");
  const renterId = req.user.id;
  const { carId, price, status, dateRent }: { carId: string, price: number, status: string, dateRent: Date  } = req.body;
  try {
    const checkout = await prisma.checkout.create({
        data: {
            price: price,
            status: status,
            dateRent: dateRent,
            car: {
                connect: {
                    id: carId,
                }
            },
            renter: {
                connect: {
                    id: renterId,
                }
            },
        }
    })
    if (checkout) {
        return res
        .status(200)
        .json({ 
            data: checkout, 
            msg: "Add checkout success",
        })
    }
  } catch (e: any) {
    next(e);
  }
}
