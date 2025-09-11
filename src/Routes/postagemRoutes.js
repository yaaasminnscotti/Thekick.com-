import express from 'express';
import PostagemController from '../controllers/postagemController.js';

const router = express.Router();

router.get('/', PostagemController.listar);
router.get('/:id', PostagemController.listarPorId);
router.post('/', PostagemController.criar);
router.put('/:id', PostagemController.atualizar);
router.delete('/:id', PostagemController.deletar);

export default router;