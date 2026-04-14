
// Pego todos os botões que abrem modal (tem id="openModal")
let OpenBtns = document.querySelectorAll('#openModal');

// Pego todos os botões de fechar (tem class="close-btn")
let closeBtns = document.querySelectorAll('.close-btn');

// Lista dos adicionais com nome e preço (só pro modal da picanha)
let adicionais = [
    { nome: "Farofa de Ovos", preco: 8.50 },
    { nome: "Vinagrete Especial", preco: 5.00 },
    { nome: "Mandioca Frita", preco: 12.00 },
    { nome: "Feijão Tropeiro (Porção)", preco: 15.00 },
    { nome: "Cerveja Artesanal", preco: 18.00 }
];

// Para cada botão de abrir modal:
OpenBtns.forEach(button => {
    // Quando clicar no botão:
    button.onclick = function() {
        // Pego o ID do modal que tá no data-modal do botão
        let targetModalId = button.getAttribute('data-modal');
        
        // Achar o modal pelo ID
        let modalselect = document.getElementById(targetModalId);
        
        // Abrir o modal
        modalselect.showModal();

        // SE for o modal da picanha, carregar os adicionais
        if (targetModalId === 'modal-picanha') {
            carregarAdicionais();
        }
    }
});

// Para cada botão de fechar:
closeBtns.forEach(button => {
    // Quando clicar no X:
    button.onclick = function() {
        // Fecha o modal mais próximo
        button.closest('dialog').close();
    }   
});

// Função que cria os checkboxes dos adicionais no modal da picanha
function carregarAdicionais() {
    // Pego o lugar onde vão aparecer os adicionais
    let container = document.getElementById('lista-adicionais');
    
    // Crio o HTML dos itens vazia
    let htmlGerado = ''; 

    // Para cada adicional na lista:
    adicionais.forEach((item, index) => {
        // Crio o HTML de cada checkbox
        htmlGerado += `
            <div class="item-adicional">
                <input type="checkbox" id="add-${index}" class="check-faturamento">
                <label for="add-${index}">${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}</label>
            </div>
        `;
    });

    // Coloco todo HTML dentro do container
    container.innerHTML = htmlGerado;

    // Pego todos os checkboxes novos
    const checkboxes = container.querySelectorAll('.check-faturamento');
    
    // Para cada checkbox, adiciono a função de calcular total
    checkboxes.forEach(caixa => {
        caixa.addEventListener('change', calcularTotal);
    });

    // Calculo o total inicial
    calcularTotal(); 
}

// Função que soma tudo quando marca/desmarca checkbox
function calcularTotal() {
    // Preço base da picanha
    let valorBase = 54.90;
    
    // Pego todos os checkboxes dos adicionais
    let checkboxes = document.querySelectorAll('#lista-adicionais input[type="checkbox"]');
    
    // Para cada checkbox marcado:
    checkboxes.forEach((caixinha, index) => {
        if (caixinha.checked) {
            // Somar o preço do adicional
            valorBase += adicionais[index].preco;
        }
    });

    // Mostro o total no HTML
    const campoTotal = document.getElementById('total-pedido');
    if (campoTotal) {
        campoTotal.innerText = `Total: R$ ${valorBase.toFixed(2).replace('.', ',')}`;
    }
}

// Função do botão "Pedir" 
function simularCompra() {
    alert("Desculpe o transtorno! Nosso sistema de pedidos está em manutenção.");
}


