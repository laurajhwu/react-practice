const express = require('express');
const router = express.Router();

//remove cookie when enter new name is clicked and redirect to track name page
router.post('/', (req, res) => {
    res.clearCookie('name');
    res.redirect('/myName');
})

module.exports = router;