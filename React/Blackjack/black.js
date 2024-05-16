// Variáveis globais
let saldoJogador = 100; // Saldo inicial do jogador
let aposta = 0;
let baralho = [];
const naipes = ['♠', '♣', '♦', '♥'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let maoDealer = [];
let maoJogador = [];
let gameOver = false;

// Função para criar o baralho
function criarBaralho() {
    for (let naipeIndex = 0; naipeIndex < naipes.length; naipeIndex++) {
        for (let valorIndex = 0; valorIndex < valores.length; valorIndex++) {
            let carta = {
                valor: valores[valorIndex],
                naipe: naipes[naipeIndex]
            };
            baralho.push(carta);
        }
    }
}

// Função para embaralhar o baralho
function embaralhar() {
    for (let i = 0; i < baralho.length; i++) {
        let randomIndex = Math.floor(Math.random() * baralho.length);
        let temp = baralho[i];
        baralho[i] = baralho[randomIndex];
        baralho[randomIndex] = temp;
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    criarBaralho();
    embaralhar();
    gameOver = false;
    maoDealer = [];
    maoJogador = [];
    document.getElementById('mensagem').innerText = '';
    document.getElementById('mao-dealer').innerHTML = '';
    document.getElementById('mao-jogador').innerHTML = '';
    document.getElementById('botao-hit').disabled = false;
    document.getElementById('botao-stand').disabled = false;
    document.getElementById('botao-reset').disabled = true;
    document.getElementById('saldo-jogador').innerText = saldoJogador;
    document.getElementById('aposta-input').disabled = false;
    document.getElementById('aposta-btn').disabled = false;
}

// Função para distribuir uma carta
function distribuirCarta(mao) {
    let carta = baralho.pop();
    if (mao === 'mao-jogador') {
        maoJogador.push(carta);
    } else {
        maoDealer.push(carta);
    }
    atualizarMao(mao);
}

// Função para calcular o valor da mão
function calcularValor(mao) {
    let valor = 0;
    let ases = 0;
    for (let i = 0; i < mao.length; i++) {
        if (mao[i].valor === 'A') {
            ases++;
            valor += 11;
        } else if (mao[i].valor === 'J' || mao[i].valor === 'Q' || mao[i].valor === 'K') {
            valor += 10;
        } else {
            valor += parseInt(mao[i].valor);
        }
    }
    while (valor > 21 && ases > 0) {
        valor -= 10;
        ases--;
    }
    return valor;
}

// Função para atualizar a mão na interface
function atualizarMao(mao) {
    let divMao = document.getElementById(mao);
    divMao.innerHTML = '';
    for (let i = 0; i < (mao === 'mao-jogador' ? maoJogador.length : maoDealer.length); i++) {
        let carta = document.createElement('div');
        carta.className = 'carta';
        carta.innerText = (mao === 'mao-jogador' ? maoJogador[i].valor + maoJogador[i].naipe : '');
        divMao.appendChild(carta);
    }
    if (mao === 'mao-dealer') {
        let cartaOculta = document.createElement('div');
        cartaOculta.className = 'carta oculta';
        cartaOculta.innerText = '';
        divMao.appendChild(cartaOculta);
    }
}

// Função para verificar o estado do jogo
function verificarJogo() {
    if (gameOver) {
        return;
    }
    if (calcularValor(maoJogador) > 21) {
        document.getElementById('mensagem').innerText = 'Você estourou! Dealer ganhou.';
        finalizarJogo('dealer');
        gameOver = true;
    }
}

// Função para a ação "Pedir carta"
function hit() {
    if (gameOver) {
        return;
    }
    distribuirCarta('mao-jogador');
    verificarJogo();
}

// Função para a ação "Parar"
function stand() {
    if (gameOver) {
        return;
    }
    document.getElementById('botao-hit').disabled = true;
    document.getElementById('botao-stand').disabled = true;
    document.getElementById('botao-reset').disabled = false;
    while (calcularValor(maoDealer) < 17) {
        distribuirCarta('mao-dealer');
    }
    let valorJogador = calcularValor(maoJogador);
    let valorDealer = calcularValor(maoDealer);
    if (valorDealer > 21 || valorJogador > valorDealer) {
        document.getElementById('mensagem').innerText = 'Você ganhou!';
        finalizarJogo('jogador');
    } else if (valorJogador < valorDealer) {
        document.getElementById('mensagem').innerText = 'Dealer ganhou.';
        finalizarJogo('dealer');
    } else {
        document.getElementById('mensagem').innerText = 'Empate!';
        finalizarJogo('empate');
    }
    gameOver = true;
}

// Função para a ação "Novo Jogo"
function reset() {
    iniciarJogo();
}

// Função para fazer a aposta
function fazerAposta() {
    let valorAposta = parseInt(document.getElementById('aposta-input').value);
    if (valorAposta > 0 && valorAposta <= saldoJogador) {
        aposta = valorAposta;
        saldoJogador -= aposta; // Deduz a aposta do saldo do jogador
        document.getElementById('aposta-input').disabled = true;
        document.getElementById('aposta-btn').disabled = true;
        document.getElementById('botao-hit').disabled = false;
        document.getElementById('botao-stand').disabled = false;
        document.getElementById('botao-reset').disabled = true;
    } else {
        alert("Por favor, insira um valor de aposta válido e que não exceda o seu saldo atual.");
    }
}

// Função para finalizar o jogo e atualizar o saldo do jogador
function finalizarJogo(vencedor) {
    if (vencedor === 'jogador') {
        saldoJogador += aposta * 2; // Dobra o dinheiro apostado em caso de vitória
    }
    // Atualiza o saldo do jogador na interface
    document.getElementById('saldo-jogador').innerText = saldoJogador;
}

// Inicia o jogo ao carregar a página
window.onload = iniciarJogo;


// Função para a ação "Pedir carta"
function hit() {
    if (gameOver) {
        return;
    }
    distribuirCarta('mao-jogador');
    verificarJogo();
}

// Função para a ação "Parar"
function stand() {
    if (gameOver) {
        return;
    }
    document.getElementById('botao-hit').disabled = true;
    document.getElementById('botao-stand').disabled = true;
    document.getElementById('botao-reset').disabled = false;
    while (calcularValor(maoDealer) < 17) {
        distribuirCarta('mao-dealer');
    }
    let valorJogador = calcularValor(maoJogador);
    let valorDealer = calcularValor(maoDealer);
    if (valorDealer > 21 || valorJogador > valorDealer) {
        document.getElementById('mensagem').innerText = 'Você ganhou!';
        finalizarJogo('jogador');
    } else if (valorJogador < valorDealer) {
        document.getElementById('mensagem').innerText = 'Dealer ganhou.';
        finalizarJogo('dealer');
    } else {
        document.getElementById('mensagem').innerText = 'Empate!';
        finalizarJogo('empate');
    }
    gameOver = true;
}

// Função para fazer a aposta
function fazerAposta() {
    let valorAposta = parseInt(document.getElementById('aposta-input').value);
    if (valorAposta > 0 && valorAposta <= saldoJogador) {
        aposta = valorAposta;
        saldoJogador -= aposta; // Deduz a aposta do saldo do jogador
        document.getElementById('aposta-input').disabled = true;
        document.getElementById('aposta-btn').disabled = true;
        document.getElementById('botao-hit').disabled = false;
        document.getElementById('botao-stand').disabled = false;
        document.getElementById('botao-reset').disabled = true;
    } else {
        alert("Por favor, insira um valor de aposta válido e que não exceda o seu saldo atual.");
    }
}