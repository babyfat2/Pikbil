import { Server } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { sessionMiddleWare } from '../../..';
import jwt from "jsonwebtoken";
import chatEvents from '../../controller/chat/chatEvents';
import prisma from '../prisma';
import joinRoom from '../../controller/chat/joinRoom';
import leaveRoom from '../../controller/chat/leaveRoom';

function configureSocket(server: Server) {
    const io = new SocketIOServer(server);
    io.engine.use(sessionMiddleWare);
    io.use(async (socket, next) => {
        //@ts-ignore
      
        const token = socket.handshake?.auth?.token;
      
        if (!token) {
          return next(new Error("Not authorized"));
        }
        const user: any = jwt.verify(token, process.env.SECRET || "");
      
        if (user) {
          const update = await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              socket: socket.id,
            }
          })
          socket.data.userId = user.id;
          socket.data.userName = user.email;
          return next();
        }
      
        next(new Error("Not authorized"));
      });
    io.on("connection", async (socket) => {     

        chatEvents(socket, io);
        joinRoom(socket, io);
        leaveRoom(socket, io);

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
}


export default configureSocket;
