<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo 777</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to bottom right, #000000, #333333); /* Degradê preto */
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background-color: rgba(0, 0, 0, 0.8); /* Fundo preto semi-transparente */
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.3); /* Sombra verde */
        }

        .content {
            text-align: center;
        }

        h1 {
            color: #fff; /* Texto branco */
        }

        table {
            margin: 20px auto;
            border-collapse: collapse;
            width: 300px; /* Largura fixa */
        }

        table td {
            padding: 20px; /* Espaçamento interno das células */
            border: 1px solid #fff; /* Bordas brancas */
            color: #fff; /* Texto branco */
        }

        .highlight {
            background-color: #4CAF50; /* Destaque verde */
        }

        button {
            padding: 10px 20px;
            font-size: 18px;
            background-color: #4CAF50; /* Verde */
            color: #fff; /* Texto branco */
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #45a049; /* Tom mais escuro de verde */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1>Jogo 777</h1>

            <table id="quadrado">
                <?php
                // Função para gerar um número aleatório entre 1 e 9
                function sortearNumero() {
                    return rand(1, 9);
                }

                // Sorteia se haverá uma linha ou coluna igual
                $highlight_type = rand(0, 1); // 0 para linha, 1 para coluna

                // Preenche a tabela
                for ($i = 0; $i < 3; $i++) {
                    echo "<tr>";
                    if ($i == 0) {
                        // Verifica se a linha atual terá todos os números iguais
                        $todos_iguais = true;
                        $numero = sortearNumero();
                        for ($j = 1; $j < 3; $j++) {
                            $num = sortearNumero();
                            if ($num != $numero) {
                                $todos_iguais = false;
                                break;
                            }
                        }
                    }

                    for ($j = 0; $j < 3; $j++) {
                        // Gera um número para destacar
                        if (($highlight_type == 0 && $i == 0 && $todos_iguais) || ($highlight_type == 1 && $j == 0)) {
                            echo "<td class='highlight'>" . $numero . "</td>";
                        } else {
                            echo "<td>" . sortearNumero() . "</td>";
                        }
                    }
                    echo "</tr>";
                }
                ?>
            </table>
            <button onclick="location.reload()">Jogar</button>
        </div>
    </div>
</body>
</html>