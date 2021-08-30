var express = require('express');
var router = express.Router();

/* GET Uniform page. */
router.get('/uniform', function(req, res, next) {
  res.render('usefull/uniform');
});

/* GET Music page. */
router.get('/music', function(req, res, next) {
  res.render('usefull/music');
});

module.exports = router;
