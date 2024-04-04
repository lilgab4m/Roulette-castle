var selectedColor = "";
var winChance = 0;

function selectColor(color, chance) {
    selectedColor = color;
    winChance = chance;
}

function play() {
    var betAmount = parseInt(document.getElementById('bet-amount').value);
    var randomNumber = Math.random();
    var resultText = "";

    if (selectedColor === "") {
        resultText = "Por favor, selecione uma cor antes de jogar.";
    } else {
        if (randomNumber < winChance) {
            betAmount *= 2;
            resultText = "Você ganhou! O seu prêmio é: " + betAmount;
            document.getElementById('result').style.color = 'green';
        } else {
            resultText = "Você perdeu! Tente novamente.";
            document.getElementById('result').style.color = 'red';
        }
    }

    document.getElementById('result').innerText = resultText;
}

var selectedColor = "";
var winChance = 0;
var currentBet = 1;

function selectColor(color, chance) {
    selectedColor = color;
    winChance = chance;
}

function increaseBet(amount) {
    currentBet += amount;
    document.getElementById('bet-amount').value = currentBet;
}

function play() {
    var betAmount = parseInt(document.getElementById('bet-amount').value);
    var randomNumber = Math.random();
    var resultText = "";

    if (selectedColor === "") {
        resultText = "Por favor, selecione uma cor antes de jogar.";
    } else {
        if (randomNumber < winChance) {
            betAmount *= 2;
            resultText = "Você ganhou! O seu prêmio é: " + betAmount;
            document.getElementById('result').style.color = 'green';
        } else {
            resultText = "Você perdeu! Tente novamente.";
            document.getElementById('result').style.color = 'red';
        }
    }

    document.getElementById('result').innerText = resultText;
}

var selectedColor = "";
var winChance = 0;
var currentBet = 1;

function selectColor(color, chance) {
    selectedColor = color;
    winChance = chance;
}

function increaseBet(amount) {
    currentBet += amount;
    document.getElementById('bet-amount').value = currentBet;
}

function multiplyBet(factor) {
    currentBet *= factor;
    document.getElementById('bet-amount').value = currentBet;
}

function divideBet(factor) {
    currentBet /= factor;
    document.getElementById('bet-amount').value = currentBet;
}

function play() {
    var betAmount = parseInt(document.getElementById('bet-amount').value);
    var randomNumber = Math.random();
    var resultText = "";

    if (selectedColor === "") {
        resultText = "Por favor, selecione uma cor antes de jogar.";
    } else {
        if (randomNumber < winChance) {
            betAmount *= 2;
            resultText = "Você ganhou! O seu prêmio é: " + betAmount;
            document.getElementById('result').style.color = 'green';
        } else {
            resultText = "Você perdeu! Tente novamente.";
            document.getElementById('result').style.color = 'red';
        }
    }

    document.getElementById('result').innerText = resultText;
}
