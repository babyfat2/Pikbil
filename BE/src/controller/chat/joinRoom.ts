import { Socket, Server as SocketIOServer } from 'socket.io';
import prisma from '../../lib/prisma';

const joinRoom = (socket: Socket, io: SocketIOServer): void => {
    socket.on('joinRoom', async (data: { room: string}) => {
        // Người dùng join room
        socket.join(data.room);
        console.log("User join room:" +  data.room);
    });
}

export default joinRoom;
