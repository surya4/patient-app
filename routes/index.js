const express = require('express');
const router = express.Router();
const db = require('../models/dbschema');

db.connect((err) => {
    if (err) throw err
    console.log('You are now connected...')
})


/* GET home page. */
router.get('/', (req, res, next) => {
    try {
        res.render('index', { title: 'Patient App' });
    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

router.post('/done', (req, res, next) => {
    try {
        let data = req.body;
        console.log(data);
        res.send(data);

    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

module.exports = router;