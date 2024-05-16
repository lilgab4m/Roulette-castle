import "../Styles/Login.css";
import Footer from "./Footer";
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Cadastro() {
    const [pais, setPais] = useState('');
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleCpf = (event) => {
        let formattedCpf = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2');
        
            setCpf(formattedCpf);
    };

    const handleTelefone = (event) => {
        let formattedTelefone = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '(+$1) $2')
            .replace(/(\d{2})(\d)/, '$1 $2')
            .replace(/(\d{5})(\d)/, '$1-$2');

        setTelefone(formattedTelefone);
    };
    
    const handleBirthdateChange = (event) => {
        let formattedBirthdate = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '$1/$2') 
            .replace(/(\d{2})(\d)/, '$1/$2'); 
    

        const [day, month, year] = formattedBirthdate.split('/').map(Number);
    

        const maxDay = 31;
        const maxMonth = 12;
        const maxYear = 2023;
    
        if (day > maxDay || month > maxMonth || year > maxYear) {
            alert('Data de nascimento inválida');
            return;
        }

    
        setDataNasc(formattedBirthdate);
    };

    const [termosAceitos, setTermosAceitos] = useState(false);

    const handleCheckboxChange = () => {
        setTermosAceitos(!termosAceitos);
    };

    const [poliOpen, setPoliOpen] = useState(false);
    const [politicasLidas, setPoliticasLidas] = useState(0);

    const handlePoliClick = () => {
        setPoliOpen(!poliOpen);
        setPoliticasLidas(1);
    }

    const handleCloseClick = () => {
        setPoliOpen(false);
    }


    const handleRegistro = (e) => {
        e.preventDefault(); 
        if (politicasLidas < 1) {
            alert('Você precisa ler os termos antes de se cadastrar');
            return;
        }
        if (!termosAceitos) {
            alert('Você precisa aceitar os termos para se cadastrar');
            return;
        }

        fetch('http://localhost:3001/adicionar-usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pais: pais,
                nome: nome,
                dataNasc: dataNasc,
                cpf: cpf,
                email: email,
                telefone: telefone,
                usuario: usuario,
                senha: senha,
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    window.location.href = "http://localhost:5173/login";
                }
            })
            .catch(err => {
                console.error('Erro ao tentar fazer o registro:', err);
                alert('Erro ao tentar fazer o registro. Por favor, tente novamente.');
            });

    }

    return (
        <>
            <div className="Rightbody" id="Rightbody">
                <div className="Login">
                    <h1>Cadastro</h1>
                    <form onSubmit={handleRegistro}>
                        <select id="countries" value={pais} name="pais" onChange={(e) => setPais(e.target.value)}>
                            <option value="BR">Brasil</option>
                            <option value="DE">Alemanha</option>
                            <option value="CA">Canadá</option>
                            <option value="CN">China</option>
                            <option value="US">Estados Unidos</option>
                            <option value="FR">França</option>
                            <option value="IN">Índia</option>
                            <option value="JP">Japão</option>
                            <option value="RU">Russia</option>
                            <option value="GB">Reino Unido</option>
                        </select>
                        <label htmlFor="nome">Nome completo</label>
                        <input required type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <label htmlFor="datanasc">Data de nascimento</label>
                        <input required id="datanasc" name="datanasc" value={dataNasc} onChange={handleBirthdateChange} placeholder="DD/MM/AAAA" />
                        <label htmlFor="cpf">Número do CPF</label>
                        <input required type="text" id="cpf" name="cpf" maxLength={14} value={cpf} onChange={handleCpf} placeholder="123.456.789-10"/>
                        <label htmlFor="email">E-mail</label>
                        <input required type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="seuemail@gmail.com"/>
                        <label htmlFor="telefone">Telefone</label>
                        <input required type="text" id="telefone" name="telefone" maxLength={19} value={telefone} onChange={handleTelefone}placeholder="(+xx) 11 12345-6789"/>
                        <label htmlFor="usuario">Usuário</label>
                        <input required type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <label htmlFor="senha">Senha</label>
                        <input required type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        <div>
                            <input type="checkbox" checked={termosAceitos} onChange={handleCheckboxChange} />
                            <div className="politicTxt">
                                <p>Eu tenho mais de 18 anos e li, aceito e concordo com a <a onClick={handlePoliClick}>Politica de privacidade</a></p>
                            </div>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                    <p></p>
                    <p>Já não tem uma conta? <NavLink to="/login" id="loginLink">Login</NavLink></p>
                </div>
                <div className="containerPolitica" onClick={handleCloseClick} style={{ width: poliOpen ? "100%" : "0", height: poliOpen ? "102%" : "0" }} >
                    <div className="Politica" style={{ width: poliOpen ? "55%" : "0", height: poliOpen ? "80%" : "0"}}>
                    <h1>    
                        Política de Privacidade
                    </h1>
                    <p>
                        <b>1.</b> Esta Política de Privacidade se refere aos dados pessoas que o(a) Roulette castle poderá obter quando seus Usuários utilizam dos serviços prestados durante a navegação dentro de nosso ambiente virtual. Nesta Política de Privacidade, será descrita de que forma serão coletados e armazenados dados a respeito dos Usuários, assim como a forma pela qual tais dados poderão ser utilizados e armazenados nos termos da Lei
                        12.965/2014 ("Marco Civil da Internet*), do Decreto 8.771/2016 e da Lei n.° 13.709/2018 (Lei Geral de Proteção de Dados).
                        Ao aceitar a presente Política de Privacidade é declarado que todo seungonteido foi devidamente lido e aceito, tendo assim todas as cláusulas devidamente validadas pelo Usuário para que atuem em pleno vigor.
                        Ademais, deixa claro que esta Política de Privacidade poderá ser atualizada a qualquer tempo, a exclusivo critério dos administradores do ambiente virtual aqui discutido. Porém, deixa claro que toda e qualquer comunicação será devidamente comunicada aos Usuários para nova aceitação de modo de que, caso continuem em utilizar os serviços providenciados, estarão automaticamente concordando com as alterações realizadas no corpo desta política
                    </p>
                    <h2>
                        Obtenção, Armazenamento e Cuidado dos dados pessoais coletados.
                    </h2>
                    <p>
                        <b>2.</b> Aceitando nossa política de Privacidade, fica concedido, por livre e espontânea vontade, permissão para a coleta e armazenamento dos dados pessoas dos Usuários, que serão tratados da forma abaixo descrita:
                    <ul>
                        <li> Poderão ser coletados informações fornecidas no cadastro ao longo do uso dos Serviços e durante a sua navegação em nossa plataforma.</li>
                        
                        <li> Eventuais dados de navegação serão utilizados para possibilitar o seu acesso e saber como entrar em contato com o Usuário quando for necessário. Além de utilizados para compreender seus interesses, como forma de garantir constant melhoria e evolução dos serviços providenciados.</li>

                        <li> Os dados pessoais, poderão ser armazenados em outros países onde o(a) Roulette castle ou suas afiliadas possuam presença. Caso tais jurisdições possuam diferentes leis de proteção de dados, fica estabelecido o compromisso de armazenar e cuidar dos dados de acordo com tais leis e a presente Política de Privacidade.</li>
                        
                        <li> Os Dados pessoais poderão ser utilizados de forma anônima para fins estatísticos e de controle e melhora dos nossos serviços.</li>
                        
                        <li>Serão estabelecidas medias de segurança razoáveis para proteger todos os dados pessoais providenciados Entretanto, lembramos que não existe uma medida de segurança 100% eficaz.</li>

                        <li>Eventualmente, todos os dados coletados pelo Usuário durante o so dos serviços prestados, poderão ser excluídos a momento em que o Usuário desejar, dito isso, somos obrigados a manter os registros de conexão durante o prazo legal.</li>

                        <li> Esta Política de Privacidade se aplica a todos os websites detidos pelo(a) Roulette castle ou qualquer outra página, mídia social, ferramenta, software ou conteúdo de sua propriedade.
                        a. Sim, dados pessoais, informações de contato e de localização</li>
                    </ul>
                    </p>
                    <p>
                        <b>3.</b> O fato de usar o site e / ou serviço disponibilizado confirma o consentimento inequívoco e incondicional do Usuário com esta Política, incluindo os termos de processamento de seus dados pessoais. Na ausência de consentimento do usuário com esta política e os termos de processamento de seus dados pessoais. o Usuário deve parar de usar o site e / ou o serviço providênciados, reservando à administração o direito de impedir o acesso do referido Usuário.
                    </p>
                    <p>
                        <b>4.</b> Este ambiente é destinado a usuários com 18 (dezoito) anos de idade ou mais. Se você tem menos de 18 (dezoito) anos, não poderá usar ou registrar-se para usar este site ou seus serviços sem a permissão ou consentimento dos pais. Ao concordar com esta política de Privacidade, você tem a capacidade legal necessária para cumprir e ficar vinculado poresta política de Privacidade.
                    </p>
                    <h2>
                        Armazenamento de Informações
                    </h2>
                    <p>
                        <b>5.</b> É reconhecida a natureza sensível e confidencial dos dados e demais informações obtidas e armazenadas. Assim fica estabelecido o compromisso de manter estas informações de natureza confidencial em sigilo, sem utilizá-las ou divulgá-las sem a autorização do Usuário, exceto nos termos previstos nos Termos de Uso e na Política de Privacidade, bem como nos limites necessários para a execução das obrigações contratuais e legais, assim como para a defesa dos interesses do(a) Roulette castle e dos Usuários
                        </p>
                    <h2>
                        Cuidado com as informações e uso de Cookies 
                    </h2>
                    <p>
                        6. O Usuário concorda que o(a) Roulette castle poderá coletar, registrar, organizar, acumular, armazenar, atualizar, extrair, usar, transferir, incluindo transferência para outros países onde possua parceiros e/ou afiliadas, remover e destruir dados pessoais e outras informações
                    </p>
                    <p>
                        7. Os atos descritos acima poderão ser processados de forma manual e/ou com o uso de automação. O presente consentimento é válido até a sua retirada das configurações do Usuário e/ou até que seja solicitado pelo Usuário de forma direta. A solicitação pode ser enviada por escrito para o endereço eletrônico giovanalupo1112gmail.com
                    </p>
                    <p>
                        8. Dentro dos limites da legislação aplicável, o(a) Roulette castle toa o direito de transferir as informações fornecidas pelo Usuário para terceiros.
                    </p>
                    <p>
                        9. No tratamento de dados pessoais, serão tomadas as medidas legais, técnicas e organizacionais necessárias para proteger os dados pessoais contra o acesso não autorizado ou acidental, destruição, modificação, bloqueio, cópia, disposição, distribuição de dados pessoais, bem como outras ações ilegais em relação a dados pessoais em cumprimento dos requisitos da legislação brasileira e/ou qualquer outra que venha a ser aplicável. O Usuário concorda que algumas das informações, incluindo dados pessoais, ficam disponíveis publicamente ao usar determinados servicos e / ou o site.
                    </p>
                    <p>
                        10. Roulette castle faz uso de cookies. Ao acessar nosso site, você concorda em usar cookies nos termos da nossa Política de Cookies. Salienta-se que algum dos nossos parceiros de site podem usar cookies.
                    </p>
                    <h2>
                        Manutenção dos dados pelo Usuário
                    </h2>
                    <p>
                        11. O usuário tem o direito de requerer a exclusão de seus dados pessoais coletados durante o uso do ambiente eletrônico disponibilizado a qualquer momento, utilizando-se serviço relevant disponibilizado pelo próprio ambient, ou por meio de contato direto com a administração por meio do endereco eletrônico disponibilizado acima. Estes direitos podem ser restringidos da maneira prescrita pela legislação brasileira.
                    </p>
                    <p>
                        12. Caso o Usuário tenha ciência de que seus dados pessoas tenham sio comprometidos, de forma que poderá afetar seu acesso ao ambiente eletrônico providênciado, ele deverá comunicar imediatamente a administração para que sejam tomadas todas a medidas de segurança necessárias.
                    </p>
                    <p>
                        13. O Usuário é o único responsável por suas ações relacionadas ao uso do site e / ou serviços disponibilizados, significando que, se tais ações resultarem em violação dos direitos e interesses legítimos de terceiros, bem como descumpre com a legislação do Brasil, o Usuário concorda em indenizar os prejuízos causados ao(à) Roulette castle e / ou terceiros como resultado da não execução ou má execução das obrigações do usuário sob esta Política e / ou a legislação.
                    </p>
                    <h2>
                        Responsabilidades e Competências
                    </h2>
                    <p>
                        14. O Usuário usa os Serviços por sua conta e risco, sendo o único responsável por perdas incorridas como resultado do mal-uso pelo do ambiente e / ou dos serviços da Empresa.
                    </p>
                    <p>
                        15. A Roulette castle coopera com as autoridades competentes e com terceiros para garantir o cumprimento das leis, salvaguardar a integridade e a segurança da Plataforma e de seus usuários, e impedir condutas que prejudiquem a integridade moral e a honra das pessoas físicas ou jurídicas envolvidas.
                    </p>
                    <p>
                        16. As disposições desta Política são regidas pelas leis do Brasil. Se, por uma razão ou outra, uma ou mais disposições desta Política forem consideradas inválidas, isso não afeta as demais disposições.
                    </p>
                    <p>
                        17. Para todas as questões o Usuário pode enviar um pedido para o endereço da empresa para a seguinte conta: giovanalupo111gmail.com
                    </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Cadastro;
