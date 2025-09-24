import axios from 'axios';
import { obterCookie } from './utils/Cookies';
import decodificaToken from './utils/decodificaToken';
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
export async function postLogin(dados) {
  const usuario = verificaCadastro(dados.email_usuario)
  const id = usuario.id_usuario;
  const ehUsuario = VerificaLogin(dados);
  if(ehUsuario){
    await api.post('/usuarios',
      {
      dados,
      params: {
        id_usuario: id
      } 
      },
      {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  else{
    alert("Algo deu Errado")
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
  const dadosUsuario = obterDadosCookie();
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
async function obterDadosCookie() {

  const token  = obterCookie("tokenJwt")
  return decodificaToken(token)
  
}
export default { getUsuarios };