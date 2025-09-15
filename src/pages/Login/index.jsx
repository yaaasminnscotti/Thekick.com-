import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className='container'>
            <form>
              <h1>Login</h1>
                <input name='nome' type="text" placeholder='Usuário'/>
                <input name='email' type="email" placeholder='E-mail'/>
                <input name='senha' type="password" placeholder='Senha'/>
                <input type="submit" value="Entrar"/>
              <h2>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></h2>
          </form>
    </div>
    
  )
}

export default Login