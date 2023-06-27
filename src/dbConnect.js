import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://ronaldohcorreia:Vv5Sjo4Z8y5LEmN4@cluster0.vlmytfq.mongodb.net/alura-node");

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-node");

    documentosColecao = db.collection('documentos');

    console.log("Conectado ao banco de dados.");    
}
catch (err) {
    console.log(`${err} - falha ao conectar ao banco de dados `);
}

export { documentosColecao };