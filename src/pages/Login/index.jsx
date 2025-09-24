import { Link, useNavigate } from 'react-router-dom';
import style from './login.module.css';
import { useState } from 'react';
import { postLogin } from '../../services/api';

function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: "",
    confirmar_senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha_usuario !== formData.confirmar_senha) {
      alert("As senhas não coincidem!");
      return;
    }
    
    // Cria um objeto excluindo o confirmar_senha antes de enviar
    const { /*confirmar_senha,*/ ...dataToSend } = formData;
    console.log("Dados do formulário:", dataToSend);
    postLogin(dataToSend);
    
    navigate("/");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input 
          name='nome' 
          type="text" 
          required 
          placeholder='Usuário'
          value={formData.nome}
          onChange={handleChange}
          autoComplete='off'
        />
        <input 
          name='email' 
          type="email" 
          required 
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
          autoComplete='off'
        />
        <input 
          name='senha' 
          type="password" 
          required 
          placeholder='Senha'
          value={formData.senha}
          onChange={handleChange}
          autoComplete='off'
        />
        <button type="submit" onClick={"/"}>Entrar</button>
        <h2>Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link></h2>
      </form>
    </div>
  );
}

export default Login;