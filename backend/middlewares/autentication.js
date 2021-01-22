const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next)=>{
    const token = req.get('token');
    jwt.verify(token, 'secret', (err, decoded)=> {
        
        if(err){
            return res.status(401).json({
                msg: 'Invalid Client'
            });
        }
        req.client = decoded.data;
        next();
    })
};

const verificarAdmin= (req, res, next) => {
    const rol = req.client.role;
    if(rol === 'ADMIN'){
        next();
    }else{
        return res.status(401).json({
            msg: 'Invalid role'
        });
    }
};

module.exports = {verificarAuth, verificarAdmin}