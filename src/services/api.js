import axios from 'axios';


async function getUsuarios() {
    try {
        const resposta = await axios.get('/usuarios');
        console.log(resposta);
    } catch (erro) {
        console.error(erro);
    }
}
async function postUsuarios(dados) {
   try{
    await axios.post('/usuarios', dados, {//formulário de cadastro
        headers: {
    'Content-Type': 'application/json'
    }
    })
    } catch(erro){
        console.error(erro);
    }
}
// async function getUsuarios(params) {
    
// }
export default { getUsuarios, postUsuarios };
