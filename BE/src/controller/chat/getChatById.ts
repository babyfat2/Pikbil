import { NextFunction, Response, Request } from "express";
import prisma from "../../lib/prisma";

export async function getChatById(
    req: any,
    res: Response,
    next: NextFunction
) {
    console.log("🚀 ~ file: src/controler/chat/getMyRoomChat");
    const userId = req.user.id;
    const ownerId = req.query.ownerId;
    console.log(ownerId + userId);
    try {
        const chat = await prisma.chat.findMany({
            where: {
                OR: [{
                    senderId: userId,
                    receiverId: ownerId,
                },
                {
                    receiverId: userId,
                    senderId: ownerId,
                }]
            },
            orderBy: {
                createdAt: "desc",
              },
            select: {
                id: true,
                message: true,
                imageUri: true,
                createdAt: true,
                sender: {
                    select: {
                        id: true,
                        fullname: true,
                        avatar: true,
                    }
                },
                roomId: true,
                receiver: {
                    select: {
                        id: true,
                        fullname: true,
                        avatar: true,
                    }
                }
            }
        })
        return res.status(200).json(chat);
    } catch (e: any) {
        next(e);
    }
}