var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/newPassword', function(req, res, next) {
    res.render('newPassword');
});

module.exports = router;