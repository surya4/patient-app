const express = require('express');
const router = express.Router();
const db = require('../models/dbschema');

db.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Patient App' });
});

router.post('/', function(req, res, next) {
    let data = JSON.stringify(req.body);
    console.log(data);
});

module.exports = router;