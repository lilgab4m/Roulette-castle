<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cor dos Títulos dos Jogos</title>
<style>
    /* Estilos CSS para layout */
    .game-item p {
        color:azure; /* Define a cor do texto dos títulos dos jogos como azul */
    }

    
</style>
</head>
 <body>
    <?php
// Dados dos jogos (simulados em PHP)
$games = array(
    array("name" => "TheKingOfGame", "image" => "../img/caca.jpg", "link" => "thekingofgame.php"),
    array("name" => "Roulette", "image" => "../img/Roleta.jpg", "link" => "roulette.php"),
    array("name" => "Miner", "image" => "../img/Miner.jpg", "link" => "Miner.php"),
    array("name" => "Poker", "image" => "../img/Poker.jpg", "link" => "Poker.php"),
    array("name" => "Rocket", "image" => "../img/Rocket.jpg", "link" => "Rocket.php")
);

// Exibir os jogos
foreach ($games as $game) {
    echo '<div class="game-item">';
    echo '<a href="' . $game["link"] . '" style="color: white; text-decoration: none;">';
    echo '<img class="game-image" src="' . $game["image"] . '" alt="' . $game["name"] . '">';
    echo '<p style="color: white;">' . $game["name"] . '</p>';
    echo '</a>';
    echo '</div>';
}
?>


</body>
</html>
