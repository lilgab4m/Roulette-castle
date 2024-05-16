import React, { useEffect, useState } from "react";
import Links from "../Components/Links";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Politica from "../Components/Politica";
import '../App.css';

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
      <Links />
      <Header />
      <main>
        <Sidebar />
        <Politica />
      </main>
    </>
  );
}

export default App;
