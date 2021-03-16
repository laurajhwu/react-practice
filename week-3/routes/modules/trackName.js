const express = require('express');
const router = express.Router();

//set cookie
router.post('/', (req, res) => {
    res.cookie('name', req.body.name);
    console.log(req.body);
    res.redirect('/myName');
})

module.exports = router;