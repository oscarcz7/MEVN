import express, { Router } from 'express';
const router = express.Router();
const jwt = require('jsonwebtoken');
import Client from '../models/client';
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/', async(req, res)=>{
    const body = req.body;

    try {
        const clientDB = await Client.findOne({clientEmail: body.clientEmail})
        if(!clientDB){
            return res.status(400).json({
                msg: 'Email no encontrado'
            }); 
        }
        if(!bcrypt.compareSync(body.password, clientDB.password)){
            return res.status(500).json({
                msg: 'Password incorrecto',
            }); 
        }
        ///generacion de token
        const token = jwt.sign({
            data: clientDB
        }, 'secret' , {expiresIn: 60 * 60 * 24 * 30});

        res.json({
            clientDB,
            token
        })

    } catch (err) {
        return res.status(400).json({
            msg: 'Error occure',
            err
        }); //server err code
    }
});

module.exports = router;