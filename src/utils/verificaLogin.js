import Usuario from "../models/usuarios.js";
//import { scryptSync, timingSafeEqual} from 'crypto'

export class VerificaLogin{
  constructor(){}
  async estaLogado(id, payload){
    const usuario = await Usuario.findOne({ where: { id_usuario: id }} );
    // const senhaENomeCorretos =  await autentica(usuario.nome, usuario.login);
    const reqUsuario =  payload;
    if(!(usuario || reqUsuario)){
        return false;
    }
    
    return true;
  }

}