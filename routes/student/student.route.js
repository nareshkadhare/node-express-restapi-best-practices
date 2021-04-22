const router = require('express').Router();
const studentController = require('./student.controller');
const { studentCreate, fetchStudentById,updateStudent } = require('../../validators/student.validator');
const { validate } = require('express-validation')

router.route('/')
    .get(studentController.getStudents) //fetch all student
    .post(validate(studentCreate), studentController.createStudent); // create student

router.route('/:id')
    .get(validate(fetchStudentById), studentController.getStudent) //fetch single student
    .delete(validate(fetchStudentById), studentController.deleteStudent) //delete student
    .put(validate(updateStudent),studentController.updateStudent) // Update Student

module.exports = router;

