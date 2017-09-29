const express = require('express');
const router = express.Router();
const db = require('../models/dbschema');

var s_num,
    f_name,
    l_name,
    age,
    dob,
    gender,
    ph_num,
    comments;

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
    console.log(phone);
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
    // try {
    db.query(query, (err, rows) => {
        if (err) throw err;
        let data = JSON.stringify(rows);
        // let s_num = rows.patient_id,
        //     f_name = rows.first_name,
        //     l_name = rows.last_name,
        //     age = rows.age,
        //     dob = rows.date_of_birth,
        //     gender = rows.gender,
        //     ph_num = rows.phone_number,
        //     comments = rows.comments;
        console.log(data);

        // // console.log(rows.phone_number);
        // // console.log(ph_num);
        // res.render('details', {
        //     title: 'Patient App',
        //     s_num: s_num,
        //     f_name: f_name,
        //     l_name: l_name,
        //     age: age,
        //     dob: dob,
        //     gender: gender,
        //     ph_num: ph_num,
        //     comments: comments
        // });
        // console.log(data[2].s_num)
        res.render('details', {
            title: 'Patient App',
            data: rows
        });
    });
    // } catch (e) {
    //     console.log("Error : " + e);
    //     return next(e);
    // }
});

router.get('/done', (req, res, next) => {
    try {
        res.render('done', { title: 'Patient App' });
    } catch (e) {
        console.log("Error : " + e);
        return next(e);
    }
});

module.exports = router;