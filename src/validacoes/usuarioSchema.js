import yup, { string, date } from 'yup'

const usuarioSchema = yup.object({
    nome: string().required().min(3),
    nascimento: date(),
    telefone: string().matches(/^(55)?(?:([1-9]{2})?)(\d{4,5})(\d{4})$/),//regex para validação de celular brasileiro
    email: string().email(),
    pais: string(),
    senha: string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um caractere especial e um número')
})
export { usuarioSchema };