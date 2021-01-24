import express, { Router } from 'express';
const router = express.Router();
const jwt = require('jsonwebtoken');
import User from '../models/user';
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/', async(req, res)=>{
    const body = req.body;

    try {
        const userDB = await User.findOne({userEmail: body.userEmail})
        if(!userDB){
            return res.status(400).json({
                mensaje: 'Email no encontrado'
            }); 
        }
        if(!bcrypt.compareSync(body.password, userDB.password)){
            return res.status(500).json({
                mensaje: 'Password incorrecto',
            }); 
        }
        ///generacion de token
        const token = jwt.sign({
            data: userDB
        }, 'secret' , {expiresIn: 60 * 60 * 24 * 30});

        res.json({
            userDB,
            token
        })

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error occure',
            error
        }); //server error code
    }
});

module.exports = router;