const src = require('debug');
var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');
const Comment = require('../models/comment')

router.get('/habet', function (req, res, next) {
  const query = 'SELECT * FROM cubs_articles_comments WHERE article_id = 1';
  dbconnection.query(query, function (err, rows) {
    if(err) {
      res.render('articles/cubs/habet', {
        message: req.params.message
      })
    }else{
      res.render('articles/cubs/habet', {
        comments: rows,
        message: ''
      })
    }
  })
});

router.post('/habet_comment_post/', function (req, res, next) {
  let article = 1
  let comment = new Comment(
      req.body.username,
      req.body.comment,
      article
  );
  const query = `INSERT INTO cubs_articles_comments(username, comment_text,article_id) VALUES('${comment.username}', '${comment.comment_text}', '${1}');`;
  dbconnection.query(query, function (err, status) {
      // NOT OK - Error!!!
      if (err) {
          console.log(err)
          res.render('articles/cubs/habet', {
            comments: rows,
            message: 'Η εισαγωγή του σχολίου απέτυχε'
          });
      }
      else {
          res.redirect('/articles/cubs/habet');
      }
  });
});

module.exports = router;
