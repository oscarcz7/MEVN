import express from 'express';
const router = express.Router();

//Import model of service

import Service from '../models/service.js'

const {verificarAuth, verificarAdministrador} = require('../middlewares/autentication');

//Create new service in DB
router.post('/new-service',verificarAuth, async (req, res) => {
    const body = req.body;
    body.userId = req.user._id;

    try {

        const serviceDB = await Service.create(body);
        res.status(200).json(serviceDB) //status code & service created information

    } catch (error) {
        return res.status(500).json({
            msg: 'Error occure',
            error
        }); //server error code
    }
});

router.get('/service/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const serviceDB = await Service.findOne({ _id });
        res.status(200).json(serviceDB);

    } catch (error) {
        return res.status(400).json({
            msg: 'Error occure',
            error
        }); //server error code
    }
});
/// visualize all services Get
router.get('/service',verificarAuth ,async (req, res) => {
    const userId = req.user._id;
    try {
        const serviceDB = await Service.find({userId});
        res.json(serviceDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        });//server error code
    }
});

router.get('/services',[verificarAuth, verificarAdministrador] ,async (req, res) => {
    //const userId = req.user._id;
    try {
        const serviceDB = await Service.find();
        res.json(serviceDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        });//server error code
    }
});

//Delete
router.delete('/service/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const serviceDB = await Service.findByIdAndDelete({ _id });
        if (!serviceDB) {

            return res.status(400).json({
                mensaje: 'The id service does not exists',
                error
            });//server error code
        }
        res.json(serviceDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        });//server error code
    }
});

//Put or Update a service

router.put('/service/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const serviceDB = await Service.findByIdAndUpdate(
            _id,
            body,
            { new: true });
        res.json(serviceDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


//Export router to use

module.exports = router;