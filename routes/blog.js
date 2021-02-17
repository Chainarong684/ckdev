var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog');
});

router.get('/add', function(req, res, next) {
  res.render('addBlog');
});


module.exports = router;