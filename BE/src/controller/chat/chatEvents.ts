import { Socket, Server as SocketIOServer } from 'socket.io';
import prisma from '../../lib/prisma';

const chatEvents = (socket: Socket, io: SocketIOServer): void => {
    socket.on('sendMessage', async (data: { receiverId: string, message: string,  roomId: string }) => {
        console.log('New message: ', data.roomId);
        const message = await prisma.chat.create({
            data: {
                message: data.message,
                senderId: socket.data.userId,
                receiverId: data.receiverId,
                roomId: data.roomId,
            },
            select: {
                id: true,
                message: true,
                imageUri: true,
                createdAt: true,
                roomId: true,
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
        console.log(message);
        io.to(data.receiverId).emit("reciveMessage", { message: message });
        io.to(socket.data.userId).emit("reciveMessage", { message: message });
    });
}

export default chatEvents;
