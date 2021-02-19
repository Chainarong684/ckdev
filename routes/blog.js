var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog');
});

router.get('/addBlog', function(req, res, next) {
  res.render('addBlog');
});

router.post('/addBlog', function(req, res, next) {
  
});


module.exports = router;
