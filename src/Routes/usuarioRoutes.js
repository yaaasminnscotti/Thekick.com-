import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/filtro', UsuarioController.filtrarPorNome);
router.get('/', UsuarioController.listar);
router.get('/:id', UsuarioController.listarPorId);
router.post('/', UsuarioController.criar);
router.put('/:id', UsuarioController.atualizar);
router.delete('/:id', UsuarioController.deletar);
router.post('/login/:id', UsuarioController.login);

router.get('/deslogar/:id', UsuarioController.deslogar);

export default router;
