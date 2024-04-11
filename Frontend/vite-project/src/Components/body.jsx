import "../Styles/body.css"

function Nav() {
    return (
        <body>
            <nav id="nav">
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
            </nav>
            <div class="container">
                <div id="sidebar">
                    <a id="link" href="#0"><span class="material-symbols-outlined">house</span>
                        <div>HOME</div>
                    </a>
                    <a id="link" href="#populares"><span class="material-symbols-outlined">local_fire_department</span>
                        <div>populares</div>
                    </a>
                    <a id="link" href="#novo"><span class="material-symbols-outlined">new_releases</span>
                        <div>novos jogos</div>
                    </a>
                    <a id="link" href="#breve"><span class="material-symbols-outlined">warning</span>
                        <div>em breve</div>
                    </a>
                    <a id="link" href=""><span class="material-symbols-outlined">help</span>
                        <div>quem somos</div>
                    </a>
                    <a id="link" href=""><span class="material-symbols-outlined">call</span>
                        <div>fale conosco</div>
                    </a>

                    <a id="link" href="">
                        <div></div>
                    </a>
                    <a id="link" href="">
                        <div></div>
                    </a>
                    <a id="link" href="">
                        <div></div>
                    </a>            
                    <a id="link" href=""><span class="material-symbols-outlined">monetization_on</span>
                        <div>sacar dinheiro</div>
                    </a>
                    <a id="link" href=""><span class="material-symbols-outlined">account_circle</span>
                        <div>meu perfil</div>
                    </a>
                </div>
                <div id="trigger">
                </div>
                <div class="left-body" id="leftbody">
                    <img  id="populares" src="../img/image 6.png" />
                    <div class="container-games">
                        <div>
                            <span class="material-symbols-outlined">local_fire_department</span><p>populares</p>
                            <div id="line1"></div>
                        </div>
                        <div class="games">
                            <img src="../img/lion.png" />
                            <img src="../img/Miner.png" />
                            <img src="../img/roulette.png" />
                            <img src="../img/fruit.png" />
                            <img src="../img/shark.png" />
                            <img src="../img/bunny.png" />
                            <img src="../img/jungle.png" />
                            <img id="novo" src="../img/gold.png" />
                            <img src="../img/space.png" />
                        </div>
                    </div>
                    <div class="container-games">
                        <div>
                            <p>Novos Jogos</p>
                            <div id="line2"></div>
                        </div>
                        <div class="games">
                            <img src="../img/bull.png" />
                            <img src="../img/panda.png" />
                            <img src="../img/golden.png" />
                            <img src="../img/egypt.png" />
                            <img id="breve" src="../img/woman.png" />
                            <img src="../img/lamp.png" />
                        </div>
                    </div>
                    <div class="container-games">
                        <div>
                            <p >em breve</p>
                            <div id="line3"></div>
                        </div>
                        <div class="games" id="breve">
                            <img src="../img/cat.png" />
                            <img src="../img/monkey.png" />
                            <img src="../img/joker.png" />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Body