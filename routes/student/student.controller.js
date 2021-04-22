const studentService = require('../../services/student.service');
const { studentCreate } = require('../../validators/student.validator');

async function getStudents(req, res) {
    const [rows, fields] = await studentService.getStudents();
    res.send(rows);
}

async function getStudent(req, res) {
    try {
        const [rows, fields] = await studentService.getStudent(req.params.id);
        if (rows.length == 1) return res.send(rows[0]);
        res.status(404).send('Resource not found.');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function createStudent(req, res) {
    try {
        const [result, fields] = await studentService.createStudent(req.body);
        const [insertedStudent, columns] = await studentService.getStudent(result.insertId);
        res.send(insertedStudent[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteStudent(req, res) {
    try {
        const [rows, fields] = await studentService.getStudent(req.params.id);
        if (rows.length == 1) {
            const student = rows[0];
            const deleteResult = await studentService.deleteStudent(req.params.id);
            return res.send({
                affectedRows: deleteResult[0].affectedRows,
                student: student
            });
        }
        res.status(404).send('Resource not found.');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateStudent(req, res) {
    try {
        const { id } = req.params;        
        const [updateResult] = await studentService.updateStudent(id, req.body);
        if (updateResult.affectedRows == 1) {
            const [rows] = await studentService.getStudent(id);
            return res.send(rows[0]);
        }
        res.status(404).send('Resource not found.');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getStudents,
    createStudent,
    getStudent,
    deleteStudent,
    updateStudent
}