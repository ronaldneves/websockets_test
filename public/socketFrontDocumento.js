import atualizaTexto from "./documento.js";

const socket = io();


function emitirTexto(texto) {
    socket.emit("texto", texto);
}


socket.on("texto_clientes", (texto) => {
       atualizaTexto(texto);
})

export default emitirTexto;