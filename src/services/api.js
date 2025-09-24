import axios from 'axios';
import { VerificaLogin } from './utils/verificaLogin';
import verificaCadastro from './utils/verificaCadastro';

const api = axios.create({
  baseURL: 'http://localhost:3000', // endereço do backend
});

async function getUsuarios() {
  try {
    const resposta = await api.get('/usuarios');
    console.log(resposta);
  } catch (erro) {
    console.error(erro);
  }
}
export async function postLogin({ ...dados}) {
  try {

    const usuario = await verificaCadastro(dados.email_usuario)

    if (!usuario) {
      alert("Usuário não encontrado");
      return;
    }

    const id = usuario.id_usuario;
    const ehUsuario = await VerificaLogin(dados);


    if(ehUsuario){
      await api.post('/usuarios',dados,
      {
        headers: { 'Content-Type': 'application/json'},
        params:{ id_usuario: id },
      });

    }

    else{
      alert("Dados inválidos")
    }
  } catch (erro) {
    
    console.error("Erro no postLogin:", erro);
    alert("Erro ao realizar login");
  }
  
}
export async function postUsuarios(dados) {
  await api.post('/usuarios', dados, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export async function criarPostagem(dados) {
  const dadosUsuario =  sessionStorage.getItem(`user`);
  //é necessário modificar as informações do modelo do post
  //para salvar as outras informações da postagem -->texto, humor, likes, etc.
  const dadosPost = {
    id_usuario: dadosUsuario.id_usuario,
    dados:dados
  }
  await api.post('/postagens', dadosPost, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
}
// async function obterDadosCookie() {

//   const token  = obterCookie("tokenJwt")
//   return decodificaToken(token)
  
// }
export default { getUsuarios };