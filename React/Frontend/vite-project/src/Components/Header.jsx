import "../Styles/Header.css"
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from "react";

function Header() {
    return (
        <>
            <header id="nav">
                <span class="material-symbols-outlined" id="menu">
                    menu
                </span>
                <NavLink to="/Home">
                    <a href="">
                        <img src="src/img/logo.png" />
                    </a>
                </NavLink>
                <div>
                    <NavLink to="/Login">
                        <a href="">Entrar</a>
                    </NavLink>
                    <NavLink to="/Cadastro">
                        <a href="" id="cadastro">cadastre-se</a>
                    </NavLink>
                </div>
            </header>
        </>
    )
}


export default Header