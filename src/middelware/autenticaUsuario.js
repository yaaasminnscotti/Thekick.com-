import jwt from 'jsonwebtoken'


function autenticaUsuario(req, res, next){
    const autorizacaoCabecalho = req.headers['auth']
    const token = autorizacaoCabecalho && autorizacaoCabecalho.split(" ")[1]

    if(!token){
        return res.json({message:"token não fornecido"})
    }
    try {
        // eslint-disable-next-line no-undef
        const verificaToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verificaToken;//retorna o payload do usuario para a requisição
        next()
    } catch (erro) {
        next(erro)// necessita de tratamento de erros
    }
}

export default autenticaUsuario;