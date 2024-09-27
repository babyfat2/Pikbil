import { NextFunction, Response, Request } from "express";
import prisma from "../../lib/prisma";

export async function firstMessage(
    req: any,
    res: Response,
    next: NextFunction
) {
    console.log("🚀 ~ file: src/controler/chat/firstMessage");
    try {
        const createRoom = await prisma.room.create({
            select:{
                id: true,
            }
        })
        return res.status(200).json(createRoom);
    } catch (e: any) {
        next(e);
    }
}