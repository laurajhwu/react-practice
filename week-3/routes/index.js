const express = require('express');
const router = express.Router();

const home = require('./modules/home');
router.use('/', home);

const data = require('./modules/data');
router.use('/getData', data);

const myName = require('./modules/myName');
router.use('/myName', myName);

const trackName = require('./modules/trackName');
router.use('/trackName', trackName);

const clearName = require('./modules/clearName');
router.use('/clearName', clearName);

module.exports = router;