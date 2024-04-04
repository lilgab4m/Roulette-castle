<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Cassino</title>
    <link rel="stylesheet" href="roleta.css">
</head>
<body>
    <div class="container">
        <h1>Jogo de Cassino</h1>
        <div class="game-container">
            <div class="animation-container">
                <!-- 31 quadrados serão gerados dinamicamente com JavaScript -->
            </div>
        </div><div class="bet-amount"><BR><BR>
            <label for="bet-amount">Valor da aposta:</label>
            <input type="number" id="bet-amount" min="1" step="1" value="1"><BR><BR><BR>
            <button class="bet-button" onclick="increaseBet(1)">+1</button>
            <button class="bet-button" onclick="increaseBet(10)">+10</button>
            <button class="bet-button" onclick="increaseBet(100)">+100</button>
            <button class="bet-button-gray" onclick="multiplyBet(2)">2x</button>
            <button class="bet-button-gray" onclick="divideBet(2)">1/2</button>
        </div>
        <div class="color-selection">
            <button class="color-button" id="red-button" onclick="selectColor('red', 0.2)">Vermelho (2x)</button>
            <button class="color-button" id="black-button" onclick="selectColor('black', 0.2)">Preto (2x)</button>
            <button class="color-button" id="white-button" onclick="selectColor('white', 0.01)">Branco (10x)</button>
        </div>
        
        <button onclick="play()">Jogar</button>
        <div id="result"></div>
    </div>

    <script src="roleta.js"></script>
</body>
</html>
