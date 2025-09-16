import jwt from 'jsonwebtoken';
const chaveSecreta = "ChaveSuperSecreta";
function criaTokenJwt(payload){
  const token = jwt.sign({
    payload,
    expiresIn: "300" 
    },chaveSecreta )

  return token;
}
export { criaTokenJwt }




