const express = require('express');
const router = express.Router();

const data = require('./modules/data');
router.use('/getData', data);

module.exports = router;