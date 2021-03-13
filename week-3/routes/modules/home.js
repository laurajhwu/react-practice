const express = require('express');
const router = express.Router();

//render main page
router.get('/', (req, res) => {
    res.render('home');
})

module.exports = router;