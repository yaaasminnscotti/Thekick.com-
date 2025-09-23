import axios from 'axios';

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
  await api.post('/usuarios', dados, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export async function postUsuarios(dados) {
  await api.post('/usuarios', dados, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export async function criarPostagem(dados) {
  
  await api.post('/postagens', dados, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
}
export default { getUsuarios };