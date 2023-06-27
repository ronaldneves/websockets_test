import io from './server.js';
import { encontrarDocumento, atualizaDocumento } from './documentosDB.js';

io.on("connection", (socket) => {
    console.log(`Um usuário se conectou. ID do usuário: ${socket.id}`);

    socket.on("selecionar_documento", async (nomeDocumento) => {
        socket.join(nomeDocumento);

        const documento = await encontrarDocumento(nomeDocumento);

        console.log(documento);

        if (documento) {
            socket.emit("texto_documento", documento.texto);
        }
    });
    
    socket.on("texto",  async ({texto, nomeDocumento}) => {
        const atualizacao =  await atualizaDocumento(nomeDocumento, texto);        

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_clientes", texto);
        }        
    });    
    
    socket.on("disconnect", (motivo) => {        
        console.log(`Cliente ${socket.id} desconectado. Motivo: ${motivo}`);
    });
});


