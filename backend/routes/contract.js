import express from 'express';
const router = express.Router();

//import contract model
import Contract from '../models/contract';
//authentication import
const { verificarAuth, verificarAdmin } = require('../middlewares/autentication');

//POST NEW CONTRACT IN THE DATABASE
router.post('/newContract', verificarAuth, async (req, res) => {
  const body = req.body;
  body.clientID = req.client._id;
  try {
    const contractDB = await Contract.create(body);
    res.status(200).json(contractDB);
  } catch (err) {
    return res.status(500).json({
      msg: 'Error',
      err
    })
  }
});


//FIND CONTRACT BY ID
router.get('/contract/:id',verificarAuth, async (req, res) => {
  const _id = req.params.id;
  try {
    const contractDB = await Contract.findOne({ _id });
    res.status(200).json(contractDB);

  } catch (err) {
    return res.status(400).json({
      msg: 'Error',
      err
    }); //server error code
  }
});

/// visualize all contracts Get
router.get('/contract', async (req, res) => {
  
  try {
    const contractDB = await contract.find({});
    res.json(contractDB);
  } catch (err) {
    return res.status(400).json({
      msg: 'Error',
      err
    });//server error code
  }
});

router.get('/contracts', [verificarAdmin], async (req, res) => {
  try {
    const contractDB = await Contract.find();
    res.json(contractDB);
  } catch (err) {
    return res.status(400).json({
      msg: 'Ocurrio un error',
      err
    });//server error code
  }
});

//Delete
router.delete('/contract/:id', [verificarAuth, verificarAdmin], async (req, res) => {
  const _id = req.params.id;
  try {
    const contractDB = await Contract.findByIdAndDelete({ _id });
    if (!contractDB) {

      return res.status(400).json({
        msg: 'The id contract does not exists',
        err
      });//server error code
    }
    res.json(contractDB);
  } catch (err) {
    return res.status(400).json({
      msg: 'Error',
      err
    });//server error code
  }
});

//Put or Update a contract
router.put('/contract/:id',[verificarAuth, verificarAdmin], async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const contractDB = await Contract.findByIdAndUpdate(
      _id,
      body,
      { new: true });
    res.json(contractDB);
  } catch (err) {
    return res.status(400).json({
      msg: 'Error',
      err
    })
  }
});


//Export router to use
module.exports = router;



