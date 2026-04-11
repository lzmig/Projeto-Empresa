fetch("assets/cardapio.json")
    .then(res => res.json())
    .then(cardapio => {

        const copiaCardapio = [...cardapio];

        copiaCardapio.sort(() => Math.random() - 0.5);

        const pratosSorteados = copiaCardapio.slice(0, 3);

        const container = document.getElementById("pratos");

        pratosSorteados.forEach(prato => {
            container.innerHTML += `
            <div class="cardPrato">
                <img class="imgPrato" src="${prato.imagem}" alt="${prato.nome}">
                <p class="nomePrato">${prato.nome}</p>
                <p class="precoPrato">R$ ${prato.preco.toFixed(2)}</p>
                </div>
        `;
        });

    });

var cardAtual = 0;

function atualizarCarrossel() {
    var cards = document.getElementById("idCarrossel").children;
    var total = cards.length;
    var deslocamentos = [-420, -230, 0, 230, 420];
    var escalas = [0.65, 0.82, 1.00, 0.82, 0.65];
    var classes = ["longe", "lateral", "ativo", "lateral", "longe"];

    for (var i = 0; i < total; i++) {
        var posicao = i - cardAtual;

        if (posicao < -2) posicao = posicao + total;
        if (posicao > 2) posicao = posicao - total;

        var slot = posicao + 2;

        cards[i].style.transform = "translateX(" + deslocamentos[slot] + "px) scale(" + escalas[slot] + ")";
        cards[i].style.zIndex = slot == 2 ? 5 : slot == 1 || slot == 3 ? 2 : 1;
        cards[i].className = "cardDiferencial " + classes[slot];

        if (slot == 2) {
            cards[i].style.bottom = "1rem";
        } else {
            cards[i].style.bottom = "0";
        }
    }
}

function moverCarrossel(direcao) {
    var total = document.getElementById("idCarrossel").children.length;
    cardAtual = cardAtual + direcao;
    if (cardAtual < 0) cardAtual = total - 1;
    if (cardAtual >= total) cardAtual = 0;
    atualizarCarrossel();
}

atualizarCarrossel();
