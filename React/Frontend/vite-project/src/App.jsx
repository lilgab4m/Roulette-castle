import React, { useEffect, useState } from "react";
import About from "../src/About/About";
import Politic from "../src/Politic/Politic";
import Perfil from "../src/Perfil_page/PerfilPage";
import Suport from "../src/Suport/Suport";
import Home from "./Home/Home";
import Login_Page from "./LoginPage/Login_Page";
import CadastroPage from "./CadastroPage/CadastroPage";
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    const Rightbody = document.getElementById('Rightbody');
    const span = document.getElementById('menu');

    const handleMenuClick = () => {
      if (mode === 0) {
        sidebar.style.transform = 'translateX(0)';
        Rightbody.style.marginLeft = '20%';
        span.style.transform = 'rotate(90deg)';
        span.textContent = "close";
        setMode(1);
      } else {
        sidebar.style.transform = 'translateX(-100%)';
        Rightbody.style.marginLeft = '0';
        span.style.transform = 'rotate(0deg)';
        span.textContent = "menu";
        setMode(0);
      }
    };

    span.addEventListener('click', handleMenuClick);

    return () => {
      span.removeEventListener('click', handleMenuClick);
    };
  }, [mode]);

  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Politica" element={<Politic />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Suport" element={<Suport />} />
        <Route path="/Login" element={<Login_Page />} />
        <Route path="/Cadastro" element={<CadastroPage />} />
      </Routes> 
    </>
  );
}

export default App;
