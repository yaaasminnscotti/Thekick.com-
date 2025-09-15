import { Op } from 'sequelize';
import Usuario from '../models/usuarios.js';
import { VerificaLogin } from '../utils/verificaLogin.js';


class UsuarioController {
  static async listar(req, res) {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  }

  static async listarPorId(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json(usuario);
  }

  static async criar(req, res) {
    const novoUsuario = await Usuario.create(req.body);
    localStorage.setItem(`user-${novoUsuario.id}`, `${novoUsuario}`)

    res.json(novoUsuario);
  }

  static async atualizar(req, res) {
    await Usuario.update(req.body, { where: { id_usuario: req.params.id } });
    res.json({ message: 'Usuário atualizado!' });
  }

  static async deletar(req, res) {
    await Usuario.destroy({ where: { id_usuario: req.params.id } });
    res.json({ message: 'Usuário deletado!' });
  }
  static async login(req, res){
      const usuarioLogado = VerificaLogin.estaLogado(req.params.id);
      if(!usuarioLogado){
        res.json({message: 'Usuário não encontrado'})
      } else if(usuarioLogado == 'true'){
        res.json({ message: 'Usuário Já está conectado' });
      }
      else{
        localStorage.setItem('logged', `${usuarioLogado}`);
      }
  }
  static async deslogar(req, res){
    const usuarioLogado = VerificaLogin.estaLogado(req.params.id);
      if(usuarioLogado){
        localStorage.removeItem('logged');
        res.json({ message: 'Usuário desconectado com sucesso' });
      }
  }
  static async filtrarPorNome(req, res) {
    const { nome } = req.query; // pega o ?nome= do navegador
    try {
      const usuarios = await Usuario.findAll({
        where: {
          nome_usuario: {
            [Op.iLike]: `%${nome}%` // iLike = case insensitive (Postgres)
          }
        }
      });
      res.status(200).json(usuarios);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - erro no filtro` });
    }
  }

}

export default UsuarioController;
