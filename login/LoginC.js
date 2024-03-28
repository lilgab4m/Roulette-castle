document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, verificar se o username e password estão corretos

    console.log('Usuário:', username);
    console.log('Senha:', password);
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    var birthdate = document.getElementById('birthdate').value;

    // Verificar se a data de nascimento é válida (se é uma data passada)
    var today = new Date().toISOString().slice(0, 10);
    if (birthdate > today) {
        alert('Por favor, insira uma data de nascimento válida.');
        return;
    }

    // Verificar se o usuário tem pelo menos 18 anos
    var age = new Date(today).getFullYear() - new Date(birthdate).getFullYear();
    var birthdateThisYear = new Date(today).getFullYear() + '-' + birthdate.substring(5);
    if (today < birthdateThisYear) {
        age--;
    }

    if (age < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return;
    }

    // Aqui você pode adicionar a lógica de criação de conta
    // Por exemplo, enviar dados para o servidor

    console.log('Novo Usuário:', newUsername);
    console.log('Nova Senha:', newPassword);
    console.log('Data de Nascimento:', birthdate);
});

document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-title').textContent = 'Cadastro';
    document.getElementById('login-form').classList.remove('form-active');
    document.getElementById('login-form').classList.add('form-hidden');
    document.getElementById('signup-form').classList.remove('form-hidden');
    document.getElementById('signup-form').classList.add('form-active');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-title').textContent = 'Login';
    document.getElementById('signup-form').classList.remove('form-active');
    document.getElementById('signup-form').classList.add('form-hidden');
    document.getElementById('login-form').classList.remove('form-hidden');
    document.getElementById('login-form').classList.add('form-active');
});
