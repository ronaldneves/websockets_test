const socket = io();
import emitirTexto from "./socketFrontDocumento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
   emitirTexto(textoEditor.value);
});

function atualizaTexto(texto) {
    textoEditor.value = texto; 
}

export default atualizaTexto;