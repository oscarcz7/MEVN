const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next)=>{
    const token = req.get('token');
    jwt.verify(token, 'secret', (err, decoded)=> {
        
        if(err){
            return res.status(401).json({
                msg: 'Usuario no valido'
            });
        }
        req.user = decoded.data;
        next();
    })
}

const verificarAdministrador = (req, res, next) => {
    const rol = req.user.role;
    if(rol === 'ADMIN'){
        next();
    }else{
        return res.status(401).json({
            msg: 'Usuario no valido'
        });
    }
}

module.exports = {verificarAuth, verificarAdministrador}