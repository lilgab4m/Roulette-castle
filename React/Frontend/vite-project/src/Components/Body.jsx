import "../Styles/Body.css"
import { NavLink } from 'react-router-dom';
import Footer from "./Footer"

function Body() {
    return (
        <>        
            <div class="Rightbody" id="Rightbody">
                <img  id="populares" src="src/img/image 6.png" />
                <div class="container-games">
                    <div>
                        <span class="material-symbols-outlined">local_fire_department</span><p>populares</p>
                        <div id="line1"></div>
                    </div>
                    <div class="games">
                        <a href="C:\Users\DEV_2ano_2024\Desktop\Roulette-castle\casaniquel\index.html">
                            <img src="src/img/lion.png" />
                        </a>
                        <img src="src/img/Miner.png" />
                        <a href="http://localhost/Roulette-castle/Blackjack/Black.php">
                            <img src="src/img/roulette.png" />
                        </a>
                        <img src="src/img/fruit.png" />
                        <img src="src/img/shark.png" />
                        <a href="http://localhost/Roulette-castle/corrida/corrida1.php">
                            <img src="src/img/car.png" />
                        </a>
                        <img src="src/img/jungle.png" />
                        <img id="novo" src="src/img/gold.png" />
                        <img src="src/img/space.png" />
                    </div>
                </div>
                <div class="container-games">
                    <div>
                        <p>Novos Jogos</p>
                        <div id="line2"></div>
                    </div>
                    <div class="games">
                        <img src="src/img/bull.png" />
                        <img src="src/img/panda.png" />
                        <img src="src/img/golden.png" />
                        <img src="src/img/egypt.png" />
                        <img id="breve" src="src/img/woman.png" />
                        <img src="src/img/lamp.png" />
                    </div>
                </div>
                <div class="container-games">
                    <div>
                        <p >em breve</p>
                        <div id="line3"></div>
                    </div>
                    <div class="games" id="breve">
                        <img src="src/img/cat.png" />
                        <img src="src/img/monkey.png" />
                        <img src="src/img/joker.png" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Body