import { Socket, Server as SocketIOServer } from 'socket.io';
import prisma from '../../lib/prisma';

const leaveRoom = (socket: Socket, io: SocketIOServer): void => {
    socket.on('leaveRoom', async (data: { room: string}) => {
        // Người dùng join room
        socket.leave(data.room);
        console.log("User leave room:" +  data.room);
    });
}

export default leaveRoom;
