import express, { Router } from 'express';
const router = express.Router();

import Client from '../models/client';
const {verificarAuth, verificarAdmin} = require('../middlewares/autentication');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('underscore');

//Post
router.post('/new-client', async (req, res) => {
    const body = {
        clientName: req.body.clientName,
        email: req.body.email,
        role: req.body.role
    }
    body.password = bcrypt.hashSync(req.body.password, saltRounds);
    try {
        const clientDB = await Client.create(body);
        res.status(200).json(clientDB) //status code & service created information
    } catch (err) {
        return res.status(500).json({
            msg: 'Error occure',
            err
        }); //server err code
    }
});


//Put or Update a client

router.put('/client/:id',[verificarAuth, verificarAdmin] , async (req, res) => {
    const _id = req.params.id;
    const body = _.pick(req.body, ['clientName','clientEmail', 'password' ]);
    if(body.password){
        body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }
    try {
        const clientDB = await Client.findByIdAndUpdate(
            _id,
            body,
            { new: true,
            runValidators: true });
        return res.json(clientDB);
    } catch (err) {
        return res.status(400).json({
            msg: 'Error',
            err
        })
    }
});


module.exports = router;