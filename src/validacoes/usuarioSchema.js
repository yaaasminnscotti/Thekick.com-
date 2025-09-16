import yup, { string } from 'yup'

const usuarioSchema = yup.object({
    nome: string().required().min(3),
    email: string().email(),
    senha: string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um caractere especial e um número')
})
export { usuarioSchema };