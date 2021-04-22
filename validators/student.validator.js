const { Joi } = require('express-validation');

const schemas = {
    studentCreate: {
        body: Joi.object({
            name: Joi.string().required().min(3),
            dob: Joi.date().required(),
            gender: Joi.string().required(),
            mobile: Joi.string().length(10),
            email: Joi.string().email().required()
        })
    },
    fetchStudentById: {
        params: Joi.object({
            id: Joi.number().required()
        })
    },
    updateStudent: {
        params: Joi.object({
            id: Joi.number().required()
        }),
        body: Joi.object({
            name: Joi.string().required().min(3),
            dob: Joi.date().required(),
            gender: Joi.string().required(),
            mobile: Joi.string().length(10),
            email: Joi.string().email().required()
        })
    }
}

module.exports = schemas;