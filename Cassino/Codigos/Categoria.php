<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Categoria de Jogos de Aposta</title>
<link rel="stylesheet" type="text/css" href="Categoria.css">
</head>
<style>
    /* Estilos CSS para layout */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;background-color: rgba(0, 0, 0, 0.8); /* para criar uma cor de fundo semi-transparente */

}
.container2 {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
 
    
}

.search-input {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: 6px solid #00c237;
    border-radius: 20px;
    box-sizing: border-box;
}
.game-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.game-item {
    width: 200px;
    margin: 10px;
    padding: 20px;
    border: 6px solid #00ff33;
    border-radius: 5px;
    text-align: center;
}
.game-image {
    /* background-image: ; */
    margin-bottom: 18px;
    font-family: "Kanit";
}

</style>
<body>
    <div class="container2">
        <h1 style='color:azure'>Categoria de Jogos de Aposta</h1>
        <input type="text" class="search-input" placeholder="Pesquisar por nome do jogo">
        <div class="game-list" id="gameList">
            <?php include 'games.php'; ?>
        </div>
    </div>

    <script src="Categoria.js"></script>
</body>
</html>
