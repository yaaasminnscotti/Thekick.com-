import { Link } from 'react-router-dom'
import './cadastro.css'

function Cadastro() {
  return (
    <div className='container'>
            <form>
              <h1>Login</h1>
                <input name='nome' type="text" placeholder='Usuário'/>
                <input name='email' type="email" placeholder='E-mail'/>
                <input name='senha' type="password" placeholder='Senha'/>
                <input name='confirmar_senha' type="password" placeholder='Confirme sua senha'/>
                <input type="submit" value="Cadastrar"/>
              <h2>Já possui uma conta? <Link to="/login">Entrar</Link></h2>
          </form>
    </div>
    
  )
}

export default Cadastro