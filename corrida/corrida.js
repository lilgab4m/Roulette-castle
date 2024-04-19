console.log("bolinho");
let myInterval;
let carro1 = 10;
let carro2 = 10;
let carro3 = 10;
let carro4 = 10;
let carro5 = 10;
let linhaChegadaAlcancada = false;
let vencedorDefinido = false;
let saldoInicial = 100;
let valorAposta = 0;
let carroEscolhido = 0;
let carroReduzido = 0;
let carroFrente = 0;
let apostaRealizada = false;
let contador = 1;
let vantagemAumentoVelocidade = false;
let vantagemReduzirOponenteAleatorio = false;
let vantagemReduzirOponenteMaisAFrente = false;
let vantagemReduzirOponenteMaisAFrenteAplicada = false;
let carrosDesacelerados = [false, false, false, false, false];


function aumentarVelocidadeCarroEscolhido() {
  const aumentoFixo = 0.15;
  if (vantagemAumentoVelocidade === true) {
    switch (carroEscolhido) {
      case 1:
        carro1 += aumentoFixo;
        break;
      case 2:
        carro2 += aumentoFixo;
        break;
      case 3:
        carro3 += aumentoFixo;
        break;
      case 4:
        carro4 += aumentoFixo;
        break;
      case 5:
        carro5 += aumentoFixo;
        break;
      default:
        break;
    }
  }
}


function reduzirVelocidadeOponenteAleatorio(){
  
  const reducaoFixa = 0.15;
  if(vantagemReduzirOponenteAleatorio == true){
  let carroReduzido = Math.ceil(Math.random() * 5);
  
  
  while (carroReduzido === carroEscolhido) {
    carroReduzido = Math.ceil(Math.random() * 5);
  }

  switch (carroReduzido) {
    case 1:
      carro1 -= reducaoFixa;
      break;
    case 2:
      carro2 -= reducaoFixa;
      break;
    case 3:
      carro3 -= reducaoFixa;
      break;
    case 4:
      carro4 -= reducaoFixa;
      break;
    case 5:
      carro5 -= reducaoFixa;
      break;
    default:
      break;
  }

}
}

function reduzirOponenteMaisAFrente() {
  const reducaoFixa1 = 0.25;
  
 
  if (vantagemReduzirOponenteMaisAFrente && !vantagemReduzirOponenteMaisAFrenteAplicada) {
    let posicaoCarroFrente = 0;
    let primeiroCarroDesacelerado = false;
    

    
    if (!primeiroCarroDesacelerado) {

      if (carro1 > posicaoCarroFrente && carro1 >= 875 && carro1 !== carroEscolhido) {
        carroFrente = 1;
        posicaoCarroFrente = carro1;
        primeiroCarroDesacelerado = true;

      } else if (carro2 > posicaoCarroFrente && carro2 >= 875 && carro2 !== carroEscolhido) {
        carroFrente = 2;
        posicaoCarroFrente = carro2;
        primeiroCarroDesacelerado = true;

      } else if (carro3 > posicaoCarroFrente && carro3 >= 875 && carro3 !== carroEscolhido) {
        carroFrente = 3;
        posicaoCarroFrente = carro3;
        primeiroCarroDesacelerado = true;

      } else if (carro4 > posicaoCarroFrente && carro4 >= 875 && carro4 !== carroEscolhido) {
        carroFrente = 4;
        posicaoCarroFrente = carro4;
        primeiroCarroDesacelerado = true;

      } else if (carro5 > posicaoCarroFrente && carro5 >= 875 && carro5 !== carroEscolhido) {
        carroFrente = 5;
        posicaoCarroFrente = carro5;
        primeiroCarroDesacelerado = true;
      }
    }

    
    if (primeiroCarroDesacelerado) {
      switch (carroFrente) {
        case 1:
          carro1 -= reducaoFixa1;
          break;
        case 2:
          carro2 -= reducaoFixa1;
          break;
        case 3:
          carro3 -= reducaoFixa1;
          break;
        case 4:
          carro4 -= reducaoFixa1;
          break;
        case 5:
          carro5 -= reducaoFixa1;
          break;
        default:
          break;
      }
      carrosDesacelerados[carroFrente - 1] = true;
      vantagemReduzirOponenteMaisAFrenteAplicada = true;
    }
  }

  for (let contador1 = 0; contador1 < carrosDesacelerados.length; contador1++) {
    if (carrosDesacelerados[contador1]) {
      switch (contador1 + 1) {
        case 1:
          carro1 -= reducaoFixa1;
          break;
        case 2:
          carro2 -= reducaoFixa1;
          break;
        case 3:
          carro3 -= reducaoFixa1;
          break;
        case 4:
          carro4 -= reducaoFixa1;
          break;
        case 5:
          carro5 -= reducaoFixa1;
          break;
        default:
          break;
      }
    }
  }
}
function velocidade() {
  if (linhaChegadaAlcancada || vencedorDefinido) {
    clearIntervaal(myInterval);
    const vencedor = determinarVencedor();
    if (vencedor === carroEscolhido) {
      saldoInicial += valorAposta * 2;
      alert(Parabéns, você ganhou! O Vencedor foi o corredor ${vencedor}.);
    } else {
      alert(Você perdeu. Tente novamente. O Vencedor foi o corredor ${vencedor}.);
    }
    document.getElementById("saldo").innerText = saldoInicial;
    reiniciarCorrida();
    return;
  }

  if (apostaRealizada && !linhaChegadaAlcancada && !vencedorDefinido && contador === 1) {
    document.getElementById("botaoSecreto").disabled = false;
  } else {
    document.getElementById("botaoSecreto").disabled = true;
  }

  aumentarVelocidadeCarroEscolhido(); 
  reduzirVelocidadeOponenteAleatorio();
  reduzirOponenteMaisAFrente();

  carro1 += Math.ceil(Math.random() * 10);
  const carro1Element = document.getElementById("carro1");
  carro1Element.style.left = carro1 + "px";

  carro2 += Math.ceil(Math.random() * 10);
  const carro2Element = document.getElementById("carro2");
  carro2Element.style.left = carro2 + "px";

  carro3 += Math.ceil(Math.random() * 10);
  const carro3Element = document.getElementById("carro3");
  carro3Element.style.left = carro3 + "px";

  carro4 += Math.ceil(Math.random() * 10);
  const carro4Element = document.getElementById("carro4");
  carro4Element.style.left = carro4 + "px";

  carro5 += Math.ceil(Math.random() * 10);
  const carro5Element = document.getElementById("carro5");
  carro5Element.style.left = carro5 + "px";

  if (carro1 >= 1750 || carro2 >= 1750 || carro3 >= 1750 || carro4 >= 1750 || carro5 >= 1750) {
    linhaChegadaAlcancada = true;
  }
}

function determinarVencedor() {
  let vencedor = 0;
  if (carro1 >= 1750) {
    vencedor = 1;
  } else if (carro2 >= 1750) {
    vencedor = 2;
  } else if (carro3 >= 1750) {
    vencedor = 3;
  } else if (carro4 >= 1750) {
    vencedor = 4;
  } else if (carro5 >= 1750) {
    vencedor = 5;
  }
  
  vencedorDefinido = true;
  return vencedor;
}

function realizarAposta() {
  valorAposta = parseInt(document.getElementById("valorAposta").value);
  
  if (!valorAposta || valorAposta <= 4) {
    alert("Por favor, o valor minimo para a aposta é 5 Reais.");
    return;
  }

  if (carroEscolhido === 0) {
    alert("Escolha um carro para apostar.");
    return;
  }

  if (valorAposta > saldoInicial) {
    alert("Saldo insuficiente para realizar a aposta.");
    return;
  }
  
  saldoInicial -= valorAposta;
  document.getElementById("saldo").innerText = saldoInicial;
  
  if (!apostaRealizada) {
    apostaRealizada = true;
    document.getElementById("botaoSecreto").disabled = false; 
    myInterval = setInterval(velocidade, 50);
    desabilitarBotoes();
    desabilitarBotaoVantagem1()
    desabilitarBotaoVantagem2()
    desabilitarBotaoVantagem3()
  }
}

function escolherCarro(numeroCarro) {
  carroEscolhido = numeroCarro;
  document.getElementById("resultado").innerText = Aposta no Carro ${numeroCarro} selecionada.;
}

function adicionarDinheiro() {
  const valorAdicionar = parseInt(document.getElementById("valorAdicionar").value);
  if (valorAdicionar > 0) {
    saldoInicial += valorAdicionar;
    document.getElementById("saldo").innerText = saldoInicial;
  }
}

function reiniciarCorrida() {
  carro1 = 10;
  carro2 = 10;
  carro3 = 10;
  carro4 = 10;
  carro5 = 10;
  linhaChegadaAlcancada = false;
  vencedorDefinido = false;
  apostaRealizada = false;
  document.getElementById("valorAposta").value = "";
  document.getElementById("resultado").innerText = "";
  contador = 1;
  vantagemAumentoVelocidade = false;
  vantagemReduzirOponenteAleatorio = false;
  vantagemReduzirOponenteMaisAFrente = false;
  habilitarBotoes();
  habilitarBotaoVantagem1();
  habilitarBotaoVantagem2();
  habilitarBotaoVantagem3();
}

function secret() {

  switch (carroEscolhido) {
    case 1:
      carro1 += 500;
      break;
    case 2:
      carro2 += 500;
      break;
    case 3:
      carro3 += 500;
      break;
    case 4:
      carro4 += 500;
      break;
    case 5:
      carro5 += 500; 
      break;
    default:
      break;
  }
  contador = 2;
}

function desabilitarBotoes() {
  document.getElementById("realizarApostaBtn").disabled = true;
  document.getElementById("escolherCarroBtn1").disabled = true;
  document.getElementById("escolherCarroBtn2").disabled = true;
  document.getElementById("escolherCarroBtn3").disabled = true;
  document.getElementById("escolherCarroBtn4").disabled = true;
  document.getElementById("escolherCarroBtn5").disabled = true;
  document.getElementById("adicionarDinheiroBtn").disabled = true;
}

function habilitarBotoes() {
  document.getElementById("realizarApostaBtn").disabled = false;
  document.getElementById("escolherCarroBtn1").disabled = false;
  document.getElementById("escolherCarroBtn2").disabled = false;
  document.getElementById("escolherCarroBtn3").disabled = false;
  document.getElementById("escolherCarroBtn4").disabled = false;
  document.getElementById("escolherCarroBtn5").disabled = false;
  document.getElementById("adicionarDinheiroBtn").disabled = false;
  

}

function desabilitarBotaoVantagem1() {
  document.getElementById("comprarVantagemBtn1").disabled = true;
}
  function desabilitarBotaoVantagem2() {
  document.getElementById("comprarVantagemBtn2").disabled = true;
  }
  function desabilitarBotaoVantagem3() {
  document.getElementById("comprarVantagemBtn3").disabled = true;
}

function habilitarBotaoVantagem1() {
  document.getElementById("comprarVantagemBtn1").disabled = false;
}
  function habilitarBotaoVantagem2() {
  document.getElementById("comprarVantagemBtn2").disabled = false;
  }
  function habilitarBotaoVantagem3() {
  document.getElementById("comprarVantagemBtn3").disabled = false;
}

function comprarVantagem(valor) {
  switch (valor) {
    case 7: 
      if (!vantagemAumentoVelocidade) {
        if (saldoInicial >= 7 && !apostaRealizada) {
          aumentarVelocidadeCarroEscolhido();
          saldoInicial -= 7;
          vantagemAumentoVelocidade = true;
          document.getElementById("saldo").innerText = saldoInicial;
          alert("Vantagem comprada: Aumento de Velocidade do Carro!");
          desabilitarBotaoVantagem1();
        } else {
          alert("Saldo insuficiente para comprar esta vantagem.");
        }
      }
      break;
    case 5: 
      if (!vantagemReduzirOponenteAleatorio) {
        if (saldoInicial >= 5 && !apostaRealizada) {
          reduzirVelocidadeOponenteAleatorio();
          saldoInicial -= 5;
          vantagemReduzirOponenteAleatorio = true;
          document.getElementById("saldo").innerText = saldoInicial;
          alert("Vantagem comprada: Redução de Velocidade de Oponente Aleatório!");
          desabilitarBotaoVantagem2();
        } else {
          alert("Saldo insuficiente para comprar esta vantagem.");
        }
      } 
      break;
    case 10: 
      if (!vantagemReduzirOponenteMaisAFrente) {
        if (saldoInicial >= 10 && !apostaRealizada) {
          reduzirOponenteMaisAFrente();
          saldoInicial -= 10;
          vantagemReduzirOponenteMaisAFrente = true;
          document.getElementById("saldo").innerText = saldoInicial;
          alert("Vantagem comprada: Redução de Velocidade do Oponente Mais à Frente!");
          desabilitarBotaoVantagem3();
        } else {
          alert("Saldo insuficiente para comprar esta vantagem.");
        }
      }
      break;
    default:
      alert("Opção inválida.");
      break;
  }
}