const router = require('express').Router();

router.get('',(req, res)=> {
    res.send("I am from Marksheet Route");
});

module.exports = router;

