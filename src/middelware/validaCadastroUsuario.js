import { usuarioSchema } from "../validacoes/usuarioSchema";

async function validaCadastroUsuario(req, res, next){
    try {
    await usuarioSchema.validate(req.body, {abortEarly:false});
    next()
    } catch (erro) {
        next(erro)
    }
}
export { validaCadastroUsuario };