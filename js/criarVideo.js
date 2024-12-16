import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) { // como a função "criaVideo", de "conectaAPI", é assíncrona, "criarVideo" também precisa ser
    evento.preventDefault(); // previne que a ação padrão do envio de formulário aconteça, ou seja, atualizar a página

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (e) { // pegar o erro lançado em "conectaApi.js"
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))