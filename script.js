let cardContainer = document.querySelector(".card-container");
let inputBusca = document.querySelector("#input-busca");
let dados = [];

async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function iniciarBusca() {
    const termoBusca = inputBusca.value.toLowerCase();

    if (termoBusca) {
        const resultados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca));
        renderizarCards(resultados);
        
    } else {
        // Se a busca estiver vazia, renderiza todos os cards
        renderizarCards(dados);
    }
}

function renderizarCards(dados) {
    // Limpa o container antes de adicionar novos cards
    cardContainer.innerHTML = '';

    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = ` <h2>${dado.nome}</h2>
                <p>${dado.descricao}</p>
                <p> ${dado.criacao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);

    }
}

// Carrega os dados iniciais quando a página é carregada
carregarDados();