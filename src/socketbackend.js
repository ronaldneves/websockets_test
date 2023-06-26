import io from './server.js';

io.on("connection", (socket) => {
    console.log(`Um usuário se conectou. ID do usuário: ${socket.id}`);

    socket.on("texto", (texto) => {
        console.log(texto);
    });
});

