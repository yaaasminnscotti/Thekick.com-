import { Link, useNavigate } from "react-router-dom";
import style from "./cadastro.module.css";
import { useState } from "react";
import { postUsuarios } from '../../services/api.js';

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome_usuario: "",
    nascimento_usuario: "",
    telefone_usuario: "",
    email_usuario: "",
    pais_usuario: "",
    senha_usuario: "",
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

    if (formData.senha_usuario !== formData.confirmar_senha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Cria um objeto excluindo o confirmar_senha antes de enviar
    const { confirmar_senha, ...dataToSend } = formData;

    console.log("Dados do formulário:", dataToSend);
    postUsuarios(dataToSend);

    navigate("/");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <input
          name="nome_usuario"
          type="text"
          required
          placeholder="Usuário"
          value={formData.nome_usuario}
          onChange={handleChange}
        />
        <input
          name="nascimento_usuario"
          type="date"
          required
          placeholder="Nascimento"
          value={formData.nascimento_usuario}
          onChange={handleChange}
        />
        <input
          name="telefone_usuario"
          type="tel"
          required
          placeholder="Telefone"
          value={formData.telefone_usuario}
          onChange={handleChange}
        />
        <input
          name="email_usuario"
          type="email"
          required
          placeholder="E-mail"
          value={formData.email_usuario}
          onChange={handleChange}
        />
        <input
          name="pais_usuario"
          type="text"
          required
          placeholder="País"
          value={formData.pais_usuario}
          onChange={handleChange}
        />
        <input
          name="senha_usuario"
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
        <button type="submit">
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
