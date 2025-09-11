import './cabecalho.css'
import Logo from '../../assets/imagens/logo.png'
import Avatar from '../../assets/imagens/12225881.png'
import Lupa from '../../assets/imagens/lupa.png'
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <header className="imagem">
          <img className="imagem-logo" src={Logo} alt="Logo" />
        </header>

        <form className="pesquisar">
          <div className="input-container">
            <input
              className="pesquisar__input"
              type="search"
              placeholder="Pesquisar"
            />
            <img src={Lupa} className="lupa" alt="Pesquisar" />
          </div>
        </form>

        <Link  to="/" className='fonte'>Início</Link>
        <Link  to="/novidades" className='fonte'>Novidades</Link>
        <Link  to="/conteudo" className='fonte'>Conteúdo</Link>
        <Link  to="/usuarios" className='fonte'>Usuários</Link>

      <a href="/login"><img className="imagem-avatar" src={Avatar} alt="Avatar" /></a>
      </div>
    </div>
  );
}

export default Cabecalho;
