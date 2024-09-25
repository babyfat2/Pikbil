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
        console.log("🍪", socket.handshake.headers);
        console.log("🍪", socket.id);
      
        const token = socket.handshake?.auth?.token;
      
        console.log(
          "🚀 ~ file: socket.ts:17 ~ IO.use ~ token:",
          socket.handshake?.auth
        );
        if (!token) {
          return next(new Error("Not authorized"));
        }
        const user: any = jwt.verify(token, process.env.SECRET || "");
        console.log("🚀 ~ file: socket.ts:33 ~ IO.use ~ user:", user);
      
        if (user) {
          const update = await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              socket: socket.id,
            }
          })
          console.log(update);
          socket.data.userId = user.id;
          socket.data.userName = user.email;
          return next();
        }
      
        next(new Error("Not authorized"));
      });
    io.on("connection", async (socket) => {
        console.log(`⚡: ${socket.data.userId} user just connected!`);        

        chatEvents(socket, io);
        joinRoom(socket, io);
        leaveRoom(socket, io);

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
}


export default configureSocket;
