import axios from 'axios';


async function getUsuarios() {
    try {
        const resposta = await axios.get('/usuarios');
        console.log(resposta);
    } catch (erro) {
        console.error(erro);
    }
}
async function postUsuarios() {
   try{
    const {data} = await axios.post('/usuarios', document.querySelector(''), {//formulário de cadastro
        headers: {
    'Content-Type': 'application/json'
    }
    })
    } catch(erro){
        console.error(erro);
    }
}
async function getUsuarios(params) {
    
}
export default { getUsuarios, postUsuarios };
