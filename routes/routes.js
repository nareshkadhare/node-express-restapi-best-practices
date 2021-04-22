const router = require('express').Router();
const studentRoute = require('./student/student.route');
const marksheetRoute = require('./marksheet/marksheet.route');

router.use('/students', studentRoute);
router.use('/marksheet', marksheetRoute);

module.exports = router;