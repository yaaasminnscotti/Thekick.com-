import Usuario from "../models/usuarios";
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
    // async autentica(nome, senha){
    //     if (nome === this.nome){
    //         const testeHash = scryptSync(senha, this.sal, 64);
    //         const hashReal = Buffer.from(this.hash, 'hex');

    //         const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

    //         if (hashesCorrespondem){
    //             return true;
    //         }
    //     }

    //     return false;
    // }
}