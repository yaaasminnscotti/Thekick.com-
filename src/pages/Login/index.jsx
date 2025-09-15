import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmar_senha: ''
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
    
    navigate("/");
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <input 
          name='nome' 
          type="text" 
          required 
          placeholder='Usuário'
          value={formData.nome}
          onChange={handleChange}
        />
        <input 
          name='email' 
          type="email" 
          required 
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          name='senha' 
          type="password" 
          required 
          placeholder='Senha'
          value={formData.senha}
          onChange={handleChange}
        />
        <button type="submit" onClick={"/pagina"}>Entrar</button>
        <h2>Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link></h2>
      </form>
    </div>
  );
}

export default Login;