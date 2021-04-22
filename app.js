require('dotenv').config()
const express = require('express');
const routes = require('./routes/routes');
const { ValidationError } = require('express-validation');

//Create Express Application
const app = express();

//Use Json middleware
app.use(express.json());

//Create api end point
app.use('/api', routes);

app.use(function (err, req, res, next) {
    if (err) {
        if (err instanceof ValidationError) return res.status(err.statusCode).json(err)
        return res.status(500).json(err)
    }
    next();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application started at port : ${PORT}`);
})