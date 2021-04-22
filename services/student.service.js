const db = require('./db.service');

const studentQueries = {
    getAll: "SELECT * FROM student ORDER BY id",
    create: "INSERT INTO student (name,dob,gender,mobile,email) VALUES (?, ?, ?, ?, ?)",
    getSingle: "SELECT * FROM student WHERE ID = ?",
    delete: "DELETE FROM student WHERE ID = ?",
    update: "UPDATE student set name = ?, dob = ?, gender = ?, mobile = ?, email = ? WHERE ID = ?"
}

//Get All Student
function getStudents() {
    return db.query(studentQueries.getAll);
}

//Create Student
function createStudent(student) {
    return db.execute(studentQueries.create,
        [
            student.name,
            student.dob,
            student.gender,
            student.mobile,
            student.email,
        ]
    );
}

//Update Student
function updateStudent(studentId, student) {
    return db.execute(studentQueries.update,
        [
            student.name,
            student.dob,
            student.gender,
            student.mobile,
            student.email,
            studentId
        ]
    );
}

//Get Student
function getStudent(id) {
    return db.query(studentQueries.getSingle, [id]);
}

//Delete Student
function deleteStudent(id) {
    return db.execute(studentQueries.delete, [id]);
}

module.exports = {
    getStudents,
    createStudent,
    getStudent,
    deleteStudent,
    updateStudent
}