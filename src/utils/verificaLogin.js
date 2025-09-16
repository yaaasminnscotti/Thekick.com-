import Usuario from "../models/usuarios.js";
//import { scryptSync, timingSafeEqual} from 'crypto'

export class VerificaLogin{
  constructor(){}
  async estaLogado(id){
    const usuario = await Usuario.findOne({ where: { id_usuario: id }} );
    // const senhaENomeCorretos =  await autentica(usuario.nome, usuario.login);
    
    const login = localStorage.getItem(`user-${usuario.id}`);
    if(!(usuario || login)){
        return false;
    }
    
    return true;
  }

}