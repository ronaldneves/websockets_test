// import emitirTexto from "./socketFrontDocumento.js";
// import selecionaDocumento from './socketFrontDocumento.js';
import {emitirTexto, selecionaDocumento} from "./socketFrontDocumento.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento");
const textoEditor = document.getElementById("editor-texto");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionaDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTexto({
    texto: textoEditor.value, 
    nomeDocumento});
});

function atualizaTexto(texto) {
    textoEditor.value = texto; 
}


export default atualizaTexto;