import jwt from 'jsonwebtoken';
const chaveSecreta = "ChaveSuperSecreta";

function criaTokenJwt(payload) {
  const tokenJwt = jwt.sign(payload, chaveSecreta, {
    expiresIn: "1h",
  });

  return tokenJwt;
}

export default criaTokenJwt;
