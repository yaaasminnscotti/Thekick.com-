import axios from 'axios';
// import { postUsuarios } from '../../services/api.js'

async function getUsuarios() {
    try {
        const resposta = await axios.get('/usuarios');
        console.log(resposta);
    } catch (erro) {
        console.error(erro);
    }
}
export async function postUsuarios(dados) {
   //try{
    await axios.post('/usuarios', dados, {//formulário de cadastro
        headers: {
    'Content-Type': 'application/json'
    }
    })
   // } catch(erro){ /* empty */ }
}
// async function getUsuarios(params) {
    
// }
export default { getUsuarios};
