
let OpenBtns = document.querySelectorAll('#openModal');
let closeBtns = document.querySelectorAll('.close-btn');



let adicionais = [
    { nome: "Farofa de Ovos", preco: 8.50 },
    { nome: "Vinagrete Especial", preco: 5.00 },
    { nome: "Mandioca Frita", preco: 12.00 },
    { nome: "Feijão Tropeiro (Porção)", preco: 15.00 },
    { nome: "Cerveja Artesanal", preco: 18.00 }
];


OpenBtns.forEach(button => {
    button.onclick = function() {
        let targetModalId = button.getAttribute('data-modal');
        let modalselect = document.getElementById(targetModalId);
        modalselect.showModal();

        
        if (targetModalId === 'modal-picanha') {
            carregarAdicionais();
        }
    }
});





closeBtns.forEach(button => {
    button.onclick = function() {
        button.closest('dialog').close();
    }   
});


function carregarAdicionais() {
    let container = document.getElementById('lista-adicionais');
    

    let htmlGerado = ''; 

    adicionais.forEach((item, index) => {
        htmlGerado += `
            <div class="item-adicional">
                <input type="checkbox" id="add-${index}" class="check-faturamento">
                <label for="add-${index}">${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}</label>
            </div>
        `;
    });

    container.innerHTML = htmlGerado;

    
    const checkboxes = container.querySelectorAll('.check-faturamento');
    checkboxes.forEach(caixa => {
        caixa.addEventListener('change', calcularTotal);
    });

    calcularTotal(); 
}

// 6. Função para somar os valores
function calcularTotal() {
    let valorBase = 54.90;
    let checkboxes = document.querySelectorAll('#lista-adicionais input[type="checkbox"]');
    
    checkboxes.forEach((caixinha, index) => {
        if (caixinha.checked) {
            valorBase += adicionais[index].preco;
        }
    });

    // Atualiza o texto do total no HTML
    const campoTotal = document.getElementById('total-pedido');
    if (campoTotal) {
        campoTotal.innerText = `Total: R$ ${valorBase.toFixed(2).replace('.', ',')}`;
    }
}


function simularCompra() {
 alert("Desculpe o transtorno! Nosso sistema de pedidos está em manutenção.");
}


