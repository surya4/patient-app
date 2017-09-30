create table patient_data (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    age INT,
    date_of_birth DATE,
    gender VARCHAR(20),
    phone_number BIGINT,
    comments VARCHAR(255)
);


-- INSERT INTO patient_data(
--     first_name,last_name,age,date_of_birth,
--     gender,phone_number,comments)
-- VALUES('Abra','Dabra',23,'2017-12-02','Male',123456789,
-- 'Notice that you don’t have to specify the value for auto-increment column e.g., taskid column because MySQL generates value for the auto-increment column automatically.');

--  var query = "INSERT INTO patient_data(first_name, last_name, age, date_of_birth,gender, phone_number, comments) VALUES('%" + req.body.fname + "%', '%" + req.body.lname + "%', '%" + req.body.age + "%', '%" + req.body.dob + "%', '%" + req.body.gender + "%', '%" + req.body.phone + "%', '%" + req.body.comments + "%')"




