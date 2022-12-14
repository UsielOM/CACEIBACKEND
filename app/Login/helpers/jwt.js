const jwt = require('jsonwebtoken');

const generarJWT = (idProfesor, NombreCompleto) => {
    const playload = { idProfesor, NombreCompleto };
    return new Promise((resolve, reject) => {
        jwt.sign(playload, process.env.SECRET_JWT_SEED,

            {
                expiresIn: '4h'
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(token)
                }
            })
    });
}

module.exports = {
    generarJWT
}