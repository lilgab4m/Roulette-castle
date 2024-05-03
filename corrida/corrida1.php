<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>POSI.BET</title>
  <link rel="stylesheet" href="corrida1.css" type="text/css">
  <script type="text/javascript" src="corrida1.js"></script>

</head>
<body onload="init()">

  <!-- Header -->


      <button id="botaoSecreto" onclick="secret()" disabled></button>
    </div>





  <section class="menu">
<div class="imagem1">
<h1>ㅤㅤ<br><br><br> </h1>

</div>


    
      <br>
      <h1>
      <p id="resultado"></p>
    </div>
      </h1>

      <div class="container11">
      <h2>SALDO   <span id="saldo"></span>
      <input type="number" id="valorAdicionar" placeholder="Adicionar valor"> 
      <button id="adicionarDinheiroBtn" onclick="adicionarDinheiro()">DEPOSITAR</button>
      </h2>
      <h2>APOSTA <span id="saldo"></span>
            <input type="number" id="valorAposta" placeholder="Adicionar valor"><br>
            <button id="adicionarDinheiroBtn" onclick="adicionarDinheiro()">DEPOSITAR</button>
            </h2>
      </div>
    </div>
    
    </div>
  </div>
<br><br><br>
  <div class="fundocolor ">
  <div class="carros-container">
      <h3>ESCOLHA O CARRO:</h3>
      <table>
        <tr>
          <td><button id="escolherCarroBtn1" onclick="escolherCarro(1)">Carro 1</button></td>
          <td><button id="escolherCarroBtn2" onclick="escolherCarro(2)">Carro 2</button></td>
          <td><button id="escolherCarroBtn3" onclick="escolherCarro(3)">Carro 3</button></td>
          <td><button id="escolherCarroBtn4" onclick="escolherCarro(4)">Carro 4</button></td>
          <td><button id="escolherCarroBtn5" onclick="escolherCarro(5)">Carro 5</button></td>
        </tr>
      </table>

  </div>
  <br><br>
  
  <div class="perks-container">
    <h3>PERKS:</h3>
    <br>

    
<div class="textcolor">
        <button id="perkBtn" onclick="comprarVantagem(7)"><b>$7 -</b>  Aumentar Velocidade do Carro</button>
        <button id="perkBtn" onclick="comprarVantagem(5)"><b>$5 -</b>  Reduzir Velocidade de Oponente Aleatório</button>
        <button id="perkBtn" onclick="comprarVantagem(10)"><b>$10 -</b>  Reduzir Velocidade do Oponente Mais à Frente</button>
</div>
    </div><br>
    <div class="aposta">
    <button id="realizarApostaBtn" onclick="realizarAposta()">APOSTAR</button>
    </div>  
  </section>
  
      <br>
  <br>
</div>
</div>
  <!-- Pista de Corrida -->

  <div class="pista">
    
    <img id="linhainicio" src="img/linha.png"></img>
    <img id="linhachegada" src="img/linha.png"></img>
    <img id="carro1" src="img/carro1.png"></img>
    <img id="linhainicio2" src="img/linha.png"></img>
    <img id="linhachegada2" src="img/linha.png"></img>
    <div id="linha"></div>
    <img id="linhainicio3" src="img/linha.png"></img>
    <img id="linhachegada3" src="img/linha.png"></img>
    <img id="carro2" src="img/carro2.png"></img>
    <div id="linha2"></div>
    <img id="linhainicio4" src="img/linha.png"></img>
    <img id="linhachegada4" src="img/linha.png"></img>
    <img id="carro3" src="img/carro3.png"></img>
    <div id="linha3"></div>
    <img id="linhainicio5" src="img/linha.png"></img>
    <img id="linhachegada5" src="img/linha.png"></img>
    <img id="carro4" src="img/cavalo.png"></img>
    <div id="linha4"></div>
    <img id="carro5" src="img/peru.png"></img>
  </div>
  <br><br>

  <!-- Colaboradores -->
  

  <br><br><br>


  <?php include '/xampp/htdocs/Roulette-castle/rodape/rodape.php'; ?>
</body>
</html>