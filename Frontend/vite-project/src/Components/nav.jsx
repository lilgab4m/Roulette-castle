import "../Styles/nav.css"

function Nav() {
    return (
        <header>
            <span class="material-symbols-outlined" id="menu">
                menu
            </span>
            <a href="">
                <img src="../img/logo.png" alt="" />
            </a>
            <div>
                <a href="">Entrar</a>
                <a href="">cadastre-se</a>
            </div>
        </header>
    )
}

export default Nav