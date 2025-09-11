import { Link } from "react-router-dom";
import "./botao.css";

function Botao() {
  return (
    <button>
      <Link to="/cadastro">Ir para Cadastro</Link>
    </button>
  );
}

export default Botao;
