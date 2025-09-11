import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', UsuarioController.listar);
router.get('/:id', UsuarioController.listarPorId);
router.post('/', UsuarioController.criar);
router.put('/:id', UsuarioController.atualizar);
router.delete('/:id', UsuarioController.deletar);

export default router;
