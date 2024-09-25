import { NextFunction, Response, Request } from "express";
import prisma from "../../lib/prisma";

interface IUserData {
  id: string;
  fullname: string;
  avatar: string | null;
}

interface IMessage {
  id: string;
  message: string | null;
  imageUri: string | null;
  createdAt: Date;
  sender: IUserData;
  receiver: IUserData;
}

export interface IBoxChat {
  roomId: string;
  arrayMessage: Array<IMessage>;
}

export async function getMyRoomChat(
  req: any,
  res: Response,
  next: NextFunction
) {
  console.log("🚀 ~ file: src/controler/chat/getMyRoomChat" );
  const userId = req.user.id;
  try {
    const chat = await prisma.chat.findMany({
      where: {
        OR: [
          { senderId: userId },
          { receiverId: userId },
        ]
      },
      orderBy: {
        createdAt: "desc",
      },
      distinct: ["roomId"],
      select: {
        roomId: true,
      }
    })
    const dataMessage = new Array<IBoxChat>();

    for (const element of chat) {
      const roomChat = await prisma.chat.findMany({
        where: {
          roomId: element.roomId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
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
          receiver: {
            select: {
              id: true,
              fullname: true,
              avatar: true,
            }
          }
        }
      })
      dataMessage.push({roomId: element.roomId, arrayMessage: roomChat})
    };
    return res.status(200).json(dataMessage);
  } catch (e: any) {
    next(e);
  }
}