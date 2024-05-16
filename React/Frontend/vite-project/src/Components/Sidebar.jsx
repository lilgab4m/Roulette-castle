import "../Styles/Sidebar.css"
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div id="sidebar">
                <NavLink to="/Home">
                    <a id="link" href="#0"><span class="material-symbols-outlined">house</span>
                        <div>HOME</div>
                    </a>
                </NavLink>
                    <a id="link" href="#populares"><span class="material-symbols-outlined">local_fire_department</span>
                        <div>populares</div>
                    </a>
                    <a id="link" href="#novo"><span class="material-symbols-outlined">new_releases</span>
                        <div>novos jogos</div>
                    </a>
                    <a id="link" href="#breve"><span class="material-symbols-outlined">warning</span>
                        <div>em breve</div>
                    </a>
                <NavLink to="/Sobre">
                    <a id="link" href=""><span class="material-symbols-outlined">help</span>
                        <div>quem somos</div>
                    </a>
                </NavLink>
                <NavLink to="/Suport">
                    <a id="link" href=""><span class="material-symbols-outlined">call</span>
                        <div>fale conosco</div>
                    </a>
                </NavLink>
                <NavLink to="/Politica">
                    <a id="link" href=""><span class="material-symbols-outlined">gavel</span>
                        <div>Política de privacidade</div>
                    </a>
                </NavLink> 
                    <a id="link" href="">
                        <div></div>
                    </a>
                    <a id="link" href="">
                        <div></div>
                    </a>   
                <NavLink to={"/Perfil"}>         
                    <a id="link" href="#pagesacar"><span class="material-symbols-outlined">monetization_on</span>
                        <div>sacar dinheiro</div>
                    </a>
                </NavLink>
                <NavLink to={"/Perfil"}>
                    <a id="link" href=""><span class="material-symbols-outlined">account_circle</span>
                        <div>meu perfil</div>
                    </a>
                </NavLink>
            </div>
        </>
    )
}

export default Sidebar