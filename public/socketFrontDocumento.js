import atualizaTexto from "./documento.js";

const socket = io();

function selecionaDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTexto(texto);
    });    
}


function emitirTexto(dados) {
    socket.emit("texto", dados);
}


socket.on("texto_documento", (texto) => {
    atualizaTexto(texto);
})

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado. Motivo: ${motivo}`);
});

export {emitirTexto, selecionaDocumento};