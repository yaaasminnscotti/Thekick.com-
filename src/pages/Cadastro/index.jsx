import { Link, useNavigate } from "react-router-dom";
import style from "./cadastro.module.css";
import { useState } from "react";
import Login from "../Login";
import { postUsuarios } from '../../services/api.js'

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
    postUsuarios(formData)

    navigate("/");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <input
          name="nome"
          type="text"
          required
          placeholder="Usuário"
          value={formData.nome_usuario}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="E-mail"
          value={formData.email_usuario}
          onChange={handleChange}
        />
        <input
          name="senha"
          type="password"
          required
          placeholder="Senha"
          value={formData.senha_usuario}
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
