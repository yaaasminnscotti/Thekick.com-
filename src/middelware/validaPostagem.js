import { postagemSchema } from "../validacoes/postagemSchema.js";

async function validaPostagem(req, res, next){
    try {
    await postagemSchema.validate(req.body, {abortEarly:false});
    next()
    } catch (erro) {
        next(erro)
    }
}
export { validaPostagem };