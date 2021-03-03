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
  BlogsDb.getAllBlogs(function (err, data) {
    if (err) throw err
    res.render('blog', {
      resultBlogs: data
    });
  });
});

router.get('/addBlog', function (req, res, next) {
  res.render('addBlog');
});

router.get('/delete/:id', function (req, res, next) {
  console.log('Find Id : ', req.params.id);

  BlogsDb.deleteDocument(req.params.id, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted !!');
      res.redirect('/blog');
    }
  });

});

router.get('/edit/:id', function (req, res, next) {
  console.log('Find Id : ', req.params.id);

  BlogsDb.updateDocument(req.params.id, function (err, data) {
    if (err) throw err
    console.log(data);
    res.render('editBlog', {
      resultFind: data
    });
  });

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

    res.render('addBlog', {
      resultError
    });
  } else {

    data = new BlogsDb({

      title: req.body.title,
      article: req.body.article,
      category: req.body.category

    });

    BlogsDb.createBlog(data, function (err) {
      if (err) {
        console.log(err);
      } else {

        res.redirect('/blog');
        console.log('Done already save to db');
      }

    })

  }



});


module.exports = router;