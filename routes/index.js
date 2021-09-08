var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/under_construction', function(req, res, next) {
  res.render('under_construction');
});

module.exports = router;
