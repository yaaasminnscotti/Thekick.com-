import yup, { date } from 'yup'

const postagemSchema = yup.object({
    data_postagem: date().default(()=> new Date())
})
export { postagemSchema };