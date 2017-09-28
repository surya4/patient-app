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
        res.send(query);

    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

module.exports = router;