<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blackjack</title>
    <link rel="stylesheet" href="black.css">
</head>
<body>    <h1>Blackjack</h1>
    <div class="fundoC">
    <div class="container">
    
        <div id="area-jogo">
            <div id="mao-dealer" class="mao"></div>
            <div id="mao-jogador" class="mao"></div>
            <div id="botoes">
                <button id="botao-hit" onclick="hit()">Pedir carta</button>
                <button id="botao-stand" onclick="stand()">Parar</button>
                <button id="botao-reset" onclick="reset()">Novo Jogo</button>
            </div>
            <div id="mensagem"></div>
            <div id="aposta">
                <input type="number" id="aposta-input" placeholder="Insira sua aposta">
                <button id="aposta-btn" onclick="fazerAposta()">Apostar</button>
            </div>
            <div id="saldo">Saldo: <span id="saldo-jogador">100</span></div>

        </div>
        </div>  
    </div>
    <script src="black.js"></script>
</body>
</html>


