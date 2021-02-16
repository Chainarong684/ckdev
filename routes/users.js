var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User Page');
});

router.get('/add', function(req, res, next) {
  res.send('add');
});

router.get('/edit', function(req, res, next) {
  res.send('edit');
});

module.exports = router;
