import './cadastro.css'

function Cadastro() {
  return (
    <div className='container'>
      <form>
        <h1>Login</h1>
        <input name='nome' type="text" placeholder='Nome'/>
        <input name='email' type="email" placeholder='E-mail'/>
        <input name='senha' type="password" placeholder='Senha'/>
         <input type="submit" value="Cadastrar"/>
         <h2>Sem conta? Cadastre-se</h2>
       
      </form>
    </div>
  )
}

export default Cadastro