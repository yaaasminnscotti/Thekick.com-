import { Link, useNavigate } from "react-router-dom";
import "./cadastro.css";
import { useState } from "react";
import Login from "../Login";

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmar_senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmar_senha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Dados do formulário:", formData);

    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <input
          name="nome"
          type="text"
          required
          placeholder="Usuário"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="senha"
          type="password"
          required
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <input
          name="confirmar_senha"
          type="password"
          required
          placeholder="Confirme sua senha"
          value={formData.confirmar_senha}
          onChange={handleChange}
        />
        <button type="submit" onClick={"/cabecalho"} onSubmit={Login}>
          Cadastrar
        </button>
        <h2>
          Já possui uma conta? <Link to="/login">Entrar</Link>
        </h2>
      </form>
    </div>
  );
}

export default Cadastro;
