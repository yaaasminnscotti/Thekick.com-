import Usuario from "../../models/usuarios";

async function verificaCadastro(email) {
    return await Usuario.findOne({where:{email_usuario : email}})
}
export default verificaCadastro;