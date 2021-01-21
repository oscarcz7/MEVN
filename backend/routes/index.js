import express from 'express';
const router = express.Router();

import Data from '../models/index';

router.post('/new-data', async(req, res) => {
    const body = req.body;  
    try {
      const dataDB = await Data.create(body);
      res.status(200).json(dataDB); 
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
});

router.get('/')


  
  // Exportamos la configuración de express app
  module.exports = router;