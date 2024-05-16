import "../Styles/Suporte.css"
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';

function Suporte() {
    return (
        <>
            <div className="Rightbody" id="Rightbody">
                <div className="suporte">
                    <img src="src/img/Suporte.png" id="SuporteImg"/>
                    <div>
                        <h2>Suporte</h2>
                        <form>
                            <input type="textarea" placeholder="Faça a sua pergunta..." />
                        </form>
                        <p>Responderemos sua duvida em seu email cadastrado</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Suporte