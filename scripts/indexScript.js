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
