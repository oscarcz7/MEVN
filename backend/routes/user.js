import express, { Router } from 'express';
const router = express.Router();

import User from '../models/user';
const {verificarAuth, verificarAdministrador} = require('../middlewares/autentication');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('underscore');

//Post
router.post('/new-user', async (req, res) => {
    const body = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        role: req.body.role
    }
    body.password = bcrypt.hashSync(req.body.password, saltRounds);

    try {

        const userDB = await User.create(body);
        res.status(200).json(userDB) //status code & service created information

    } catch (error) {
        return res.status(500).json({
            msg: 'Error occure',
            error
        }); //server error code
    }
});


//Put or Update a user

router.put('/user/:id',[verificarAuth, verificarAdministrador] , async (req, res) => {
    const _id = req.params.id;
    const body = _.pick(req.body, ['userName','userEmail', 'password' ]);

    if(body.password){
        body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }

    try {
        const userDB = await User.findByIdAndUpdate(
            _id,
            body,
            { new: true,
            runValidators: true });
        return res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


module.exports = router;