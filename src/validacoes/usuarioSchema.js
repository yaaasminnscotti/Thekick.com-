import yup, { string, date } from 'yup'

const usuarioSchema = yup.object({
    nome_usuario: string().required().min(3),
    nascimento_usuario: date(),        //regex para validação de celular brasileiro
    telefone_usuario: string().matches(/^(55)?(?:([1-9]{2})?)(\d{4,5})(\d{4})$/),
    email_usuario: string().email(),
    pais_usuario: string(),         //regex para validação de senha forte - necessário melhorar validação
    senha_usuario: string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um caractere especial e um número')
})
export { usuarioSchema };