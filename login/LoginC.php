<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login e Cadastro</title>
    <link rel="stylesheet" href="LoginC.css">
</head>
<body>
       <div class="login-container">
            <h2 id="form-title">Login</h2>
            <form id="login-form" class="form-active">
                <div class="input-group">
                    <label for="username">Usuário</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Entrar</button>
                <p class="toggle-form">Ainda não tem uma conta? <a href="#" id="signup-link">Cadastre-se</a></p>
            </form>
            <form id="signup-form" class="form-hidden">
                <div class="input-group">
                    <label for="new-username">Novo Usuário</label>
                    <input type="text" id="new-username" name="new-username" required>
                </div>
                <div class="input-group">
                    <label for="new-password">Senha</label>
                    <input type="password" id="new-password" name="new-password" required>
                </div>

                <div class="input-group">
                    <label for="new-password">Confirme Sua Senha</label>
                    <input type="password" id="new-password" name="new-password" required>
                </div>

                <div class="input-group">
                    <label for="birthdate">Data de Nascimento</label>
                    <input type="date" id="birthdate" name="birthdate" required>
                </div>
                <button type="submit">Cadastrar</button>
                <p class="toggle-form">Já possui uma conta? <a href="#" id="login-link">Faça Login</a></p>
            </form>
            <br><br><br><br>
        </div>
    
        <script src="LoginC.js"></script>

        <?php 

    include_once ("../rodape/rodape.php");


        ?>
</div>

</body>
</html>
