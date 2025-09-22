import style from './cabecalho.module.css'
import Logo from '../../assets/imagens/logo.png'
import Lupa from '../../assets/imagens/lupa.png'
import Avatar from '../../assets/imagens/avatar.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Pagina() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={style.menuWrapper}>
      <div className={style.menu}>
        <header>
          <img className={style.imagemLogo} src={Logo} alt="Logo" />
        </header>

        <formi className={style.pesquisar}>
          <div className={style.inputContainer}>
            <input
              className={style.pesquisarInput}
              type="search"
              placeholder="Pesquisar"
            />
            <img src={Lupa} className={style.lupa} alt="Pesquisar" />
          </div>
        </formi>


        <Link to="/" className={style.fonte}>Início</Link>
        <Link to="/novidades" className={style.fonte}>Novidades</Link>
        <Link to="/conteudo" className={style.fonte}>Conteúdo</Link>
        <Link to="/usuarios" className={style.fonte}>Usuários</Link>

        < Link to="/perfil"><img className={style.fotoPerfil} src={Avatar} alt="avatar" /></Link>

      </div>
    </div>
  );
}

export default Pagina;