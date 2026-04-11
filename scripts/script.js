//============================== CONTATO ===================================//
function toggleMenu() {
    document.getElementById('menuMobile').classList.toggle('aberto');
    document.getElementById('overlay').classList.toggle('ativo');
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    const assunto = encodeURIComponent(`Mensagem de ${nome}`);
    const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);

    window.location.href = `mailto:sabordobairro@gmail.com?subject=${assunto}&body=${corpo}`;
}
function enviarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const nomeValido = /^[a-zA-ZÀ-ÿ\s]{3,}$/.test(nome);
    if (!nomeValido) {
        alert('Nome inválido. Use apenas letras, mínimo 3 caracteres.');
        return;
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        alert('E-mail inválido. Ex: seunome@email.com');
        return;
    }
    if (mensagem.length < 10) {
        alert('Mensagem muito curta. Escreva pelo menos 10 caracteres.');
        return;
    }
    const nomeFormatado = nome
        .toLowerCase()
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ');

    const assunto = encodeURIComponent(`Mensagem de ${nomeFormatado}`);
    const corpo = encodeURIComponent(
        `Nome: ${nomeFormatado}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
    );

    window.location.href = `mailto:sabordobairro@gmail.com?subject=${assunto}&body=${corpo}`;
}
//============================== CONTATO ===================================//
