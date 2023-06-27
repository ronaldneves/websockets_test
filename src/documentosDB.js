import { documentosColecao } from './dbConnect.js';


async function encontrarDocumento(nome) {
    try {
        const documento = await documentosColecao.findOne({
        nome
        });
        console.log(documento);
        return documento;
    }
    catch (err) {
        console.log(`Erro ${err} - falha ao requisitar coleção na database`);
    }    
}

async function atualizaDocumento(nome, texto) {
    try {
        const atualizacao = documentosColecao.updateOne(
            {
                nome
            },
            {
                $set: {
                    texto
                }
            }
        );

        return atualizacao;
    }
    catch (err) {
        console.log(`${err} - erro ao atualizar dados na database`)
    }
}

export { encontrarDocumento, atualizaDocumento };