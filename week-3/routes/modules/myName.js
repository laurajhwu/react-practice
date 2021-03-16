const express = require('express');
const router = express.Router();

//get cookie
router.get('/', (req, res) => {
    const name = req.cookies.name;
    res.render('myName', { name });
})

module.exports = router;

