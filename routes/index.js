const express = require('express');
const router = express.Router();
const db = require('../models/dbschema');

/* GET home page. */
router.get('/', (req, res, next) => {
    try {
        res.render('index', { title: 'Patient App' });
    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

// submit form data in db
router.post('/done', (req, res, next) => {
    let data = req.body;
    let fname = data.fname,
        lname = data.lname,
        age = Number(data.age),
        dob = data.dob,
        gender = data.gender,
        phone = Number(data.phone),
        comments = data.comments;
    var query = "INSERT INTO patient_data(first_name, last_name, age, date_of_birth,gender, phone_number, comments) VALUES('" + fname + "','" + lname + "'," + age + ",'" + dob + "','" + gender + "'," + phone + ",'" + comments + "')";
    try {
        console.log(query);
        db.query(query);
        res.redirect('done');

    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

/* GET users listing. */
router.get('/details', function(req, res, next) {
    var query = " select * from patient_data";
    try {
        db.query(query, (err, rows) => {
            if (err) throw err;
            res.render('details', {
                title: 'Patient App',
                data: rows
            });
        });
    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

// Submit message redirect
router.get('/done', (req, res, next) => {
    try {
        res.render('done', { title: 'Patient App' });
    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

module.exports = router;