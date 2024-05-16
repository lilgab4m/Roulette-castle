import "../Styles/Footer.css"
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="Footer">
                <div>
                    <div>
                        <h1>
                            Sobre nós?
                        </h1>
                        <p>
                            Somos um site que oferecemos diversão e oportunidade ganhar dinheiro...
                        </p>
                    </div>
                    <div>
                        <h1>
                            Links rápidos
                        </h1>
                        <p>
                            <NavLink to="/Home">
                                Página inicial
                            </NavLink> 
                        </p>
                        <p>
                            <NavLink to="/Sobre">
                                Sobre
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to="/Suport">
                                Contato
                            </NavLink>
                        </p>
                    </div>
                    <div>
                        <h1>
                        Contato 
                        </h1>
                        <p>
                        E-mail: rolette.castle@gmail.com
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        © 2024 - Todos os direitos reservados 
                    </p>
                    <p>
                        Desenvolvido por G2
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer