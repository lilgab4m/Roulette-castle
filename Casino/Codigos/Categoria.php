<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Categoria de Jogos de Aposta</title>
<link rel="stylesheet" type="text/css" href="../Casino/codigos/categoria.css">
</head>
<body>
    <div class="container2">
        <h1 style='color:azure'>Categoria de Jogos de Aposta</h1>
        <input type="text" class="search-input" placeholder="Pesquisar por nome do jogo">
        <div class="game-list" id="gameList">
            <?php include 'games.php'; ?>
        </div>
    </div>

    <script src="../Casino/codigos/categoria.js"></script>
</body>
</html>
