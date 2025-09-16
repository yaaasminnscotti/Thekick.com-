import express from 'express';
import ComentarioController from '../controllers/comentariocontroller.js';

const router = express.Router();

router.get('/', ComentarioController.listar);//autentica usuario
router.get('/:id', ComentarioController.listarPorId);//autentica usuario
router.post('/', ComentarioController.criar);
router.put('/:id', ComentarioController.atualizar);
router.delete('/:id', ComentarioController.deletar);

export default router;