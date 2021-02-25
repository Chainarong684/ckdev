var express = require('express');
var router = express.Router();
const BlogsDb = require('../models/db');

const {
  body,
  validationResult,
  check
} = require('express-validator');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('blog');
});

router.get('/addBlog', function (req, res, next) {
  res.render('addBlog');
});

router.post('/addBlog', [
  check('title', 'You must input Article Name').notEmpty(),
  check('article', 'Please input some text').notEmpty()
], function (req, res, next) {

  // console.log(req.body.title);
  // console.log(req.body.article);
  // console.log(req.body.category);

  const results = validationResult(req);

  var resultError = results.errors;

  if (!results.isEmpty()) {
    // console.log(results);

    res.render('addBlog', {resultError});
  } else {

    data = new BlogsDb({
    
      title:req.body.title,
      article:req.body.article,
      category:req.body.category
  
    });

    BlogsDb.createBlog(data, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/blog');
      }

    })

  }

  

});


module.exports = router;