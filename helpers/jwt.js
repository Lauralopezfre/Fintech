const jwt = require('jsonwebtoken')

const generarJWT = (userId, name) => {
    return new Promise ((resolve, reject) => {
        jwt.sign({id: userId, name: name}, '12345666', {
            expiresIn: 10
        }, (err, token) => {
            if(err){
                console.log(err)
                reject('No se pudo generar el token')
            }
            resolve(token)
        })
    })
}

const validarJWT = () => {
    var token = req.headers['x-access-token'];

    if (!token) return res.status(401).send(
        { 
            uth: false, 
            message: 'No token provided.' 
        });

    jwt.verify(token, config.secret, (err, decoded) => {

        if (err) return res.status(500).send(
            {
                auth: false, 
                message: 'Failed to authenticate token.' });

    res.status(200).send(decoded);
    });
}

module.exports = {
    generarJWT,
    validarJWT
}

