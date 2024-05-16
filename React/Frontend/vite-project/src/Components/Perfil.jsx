import "../Styles/Perfil.css"
import Footer from "./Footer"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Perfil() {
    const [deposOpen, setDeposOpen] = useState(false);
    const [sacarOpen, setSacarOpen] = useState(false);
    const [pixOpen, setPixOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const chavePix = "pix@roulettecatle.com.br";

    const handleDeposClick = () => {
        setDeposOpen(!deposOpen);
        if (sacarOpen) setSacarOpen(false);
        if (pixOpen) setPixOpen(false);
    };

    const handleSacarClick = () => {
        setSacarOpen(!sacarOpen);
        if (deposOpen) setDeposOpen(false);
        if (pixOpen) setPixOpen(false);
    };

    const handlePixClick = () => {
        setPixOpen(!pixOpen);
        if (deposOpen) setDeposOpen(false);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(chavePix);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
        <div className="Rightbody" id="Rightbody">
            <div class="container-perfil">
                <h1>MEU PERFIL</h1>
                <div class="container-info">
                    <div>
                        <p>Nome de usuário: </p>
                        <p>Data de nascimento: </p>
                        <p>Número do CPF:</p>
                        <p>País de residência:</p>
                        <p>E-mail: </p>
                        <p>Telefone: </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>SALDO</h1>
                    </div>
                    <div class="container-saldo">
                        <div class="disponivel">
                            <p>Disponível</p>
                            <h2>RS: 00,00</h2>
                        </div>
                    <div class="container-dinheiro">
                        <div class="depositar_btn" id="depos_btn" onClick={handleDeposClick}>
                            <span class="material-symbols-outlined" id="depos_span" style={{transform: deposOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}>expand_more</span>
                            <p>Depositar</p>
                        </div>
                        <div class="sacar_btn" id="sacar_btn" onClick={handleSacarClick}>
                        <span class="material-symbols-outlined" id="sacar_span" style={{transform: sacarOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}>expand_more</span>
                        <p>Sacar</p>
                    </div>
                </div>
                <div class="depositar" id="depositar" style={{ height: deposOpen ? "400px" : "0px" }}>
                    <h1>depositar</h1>
                    <div>
                        <select name="pay" id="pay_type">
                            <option value="pix">Pix</option>
                            <option value="cartao">Cartao De Crédito</option>
                            <option value="refeicao">Vale Refeição</option>
                            <option value="giftcard">GiftCard</option>
                            <option value="boleto">Boleto</option>
                        </select>
                        <input type="number" placeholder="RS 00,00" />
                        <p>Valor mínimo: R$ 10,00</p>
                        <a><button>Pagar</button></a>
                    </div>
                </div>
                <div class="sacar" id="sacar" style={{ height: sacarOpen ? "650px" : "0px" }}>
                    <h1 id="pagesacar">sacar</h1>
                    <div>
                        <select name="pay" id="pay_type">
                            <option value="cpf">CPF</option>
                            <option value="email">E-mail</option>
                            <option value="telefone">Telefone</option>
                            <option value="aleatoria">Chave aleatoria</option>
                        </select>
                        <input type="text" placeholder="Digite a chave pix" />
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="text" placeholder="Digite seu sobrenome" />
                        <input type="number" placeholder="RS 00,00" />
                        <p>Valor minimo: R$ 20.00</p>
                        <a id="pix_btn" onClick={handlePixClick}><button>Sacar</button></a>
                    </div>
                </div>
                <div class="pix" id="pix" style={{ height: pixOpen ? "1000px" : "0px" }}>
                    <img src="src/img/pix.png" />
                    <h2>RS: 00,00</h2>
                    <div class="key">
                        <p>Chave pix:</p><p id="chave">pix@roulettecatle.com.br</p><span class="material-symbols-outlined" id="copy" onClick={handleCopyClick}>file_copy</span>
                    </div>
                    <div class="copiada" id="copied" style={{ height: copied ? "30px" : "0px" }}>
                        <p>Chave copiada!</p>
                    </div>
                    <h3>Confirme os dados:</h3>
                    <div class="dados">
                        <p>Roulette Castle Serviços Digitais SA </p>
                        <p>CNPJ: 22.236.684/0001-50</p>
                        <p>Instituição: 125 Banco Genial S.A</p>
                        <p>Agência: 0061 </p>
                        <p>Conta Corrente: 3042-2</p>
                    </div>
                    <div class="atencao">
                        <span class="material-symbols-outlined">warning</span>
                        <h3>Antes de depositar leia atentamente:</h3>
                        </div>
                            <lu class="lista">
                            <li>Não aceitamos depósitos de terceiros, ou seja, o valor depositado deve vir de uma conta com o seu CPF/ CNPJ.</li>
                            <li>O valor do depósito não pode ultrapassar o seu limite disponivel</li>
                            </lu>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Perfil