const express = require('express');
const router = express.Router();

const home = require('./modules/home');
router.use('/', home);

const data = require('./modules/data');
router.use('/getData', data);


module.exports = router;