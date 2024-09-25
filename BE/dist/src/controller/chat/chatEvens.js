"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
const chatEvents = (socket: Socket, io: SocketIOServer): void => {
    socket.on('sendMessage', async (data: { userId: string, message: string }) => {
        console.log('New message: ', data.message);

        // Lưu tin nhắn vào MongoDB
        const message = await prisma.chat.create({
            data: {
                senderId: data.userId,
                receiverId: data.userId,
            }
        })

        // Phát lại tin nhắn cho tất cả người dùng
        io.emit('messageReceived', data);
    });

    // Gửi tin nhắn lịch sử khi người dùng kết nối
    socket.on('getMessages', async () => {
        socket.emit('messageHistory', messages);
    });
}

export default chatEvents;

*/ 
