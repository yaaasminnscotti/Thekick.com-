import Usuario from '../models/usuarios.js';

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
}

export default UsuarioController;
