require('dotenv').config()
const express = require('express');
const routes = require('./routes/routes');
const requestLogger = require('./middlewares/request.logger');
const requestValidator = require('./middlewares/request.validator');

//Create Express Application
const app = express();

//Use Json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Use Request Logger
app.use("/*",requestLogger);

//Create api end point
app.use('/api', routes);

//Request Validator Middleware
app.use(requestValidator);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application started at port : ${PORT}`);
})