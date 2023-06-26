// import { text } from "express";

const socket = io();

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    socket.emit("texto", textoEditor.value);
});