import "../Styles/Login.css";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault(); 

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                senha: senha
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "Login realizado com sucesso!") {
                    alert(data.message);
                    setTimeout(() => {
                    window.location.href = '/Home';
                }, 1000);
                } else {
                    alert(data.message);
                }
            })
            .catch(err => {
                console.error('Erro ao tentar fazer login:', err);
                alert('Erro ao tentar fazer login. Por favor, tente novamente.');
            });
    };

    return (
        <>
            <div className="Rightbody" id="Rightbody">
                <img src="src/img/Lion_login.png" id="login_lion" alt="" />
                <div className="Login">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id="username" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <button type="submit">Entrar</button>
                    </form>
                    <p>Ainda não tem uma conta? <NavLink to="/cadastro" id="loginLink">Cadastre-se</NavLink></p>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Login;
