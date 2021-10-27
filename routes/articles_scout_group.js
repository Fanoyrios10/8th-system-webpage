const src = require('debug');
var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');
const Comment = require('../models/comment')


router.get('/sinaji_ton_agion_xioy', function (req, res, next) {
  const query = 'SELECT * FROM scout_group_articles_comments WHERE article_id = 1';
  dbconnection.query(query, function (err, rows) {
    if(err) {
      console.log(4);
      console.log(err);
      res.render('articles/scout_group/sinaji_ton_agion_xioy', {
        message: req.params.message
      })
    }else{
      console.log(6);
      res.render('articles/scout_group/sinaji_ton_agion_xioy', {
        comments: rows,
        message: ''
      })
    }
  })
});

router.post('/scout_group_sinaji_ton_agion_xioy_comment_post/', function (req, res, next) {
  let article = 1
  let comment = new Comment(
      req.body.username,
      req.body.comment,
      article
  );
  const query = `INSERT INTO scout_group_articles_comments(username, comment_text,article_id) VALUES('${comment.username}', '${comment.comment_text}', '${1}');`;
  dbconnection.query(query, function (err, status) {
      // NOT OK - Error!!!
      if (err) {
          console.log(err)
          console.log(5);
          res.render('articles/scout_group/sinaji_ton_agion_xioy', {
            comments: rows,
            message: 'Η εισαγωγή του σχολίου απέτυχε'
          });
      }
      else {
          res.redirect('sinaji_ton_agion_xioy');
      }
  });
});

module.exports = router;
