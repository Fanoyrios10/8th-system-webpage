var express = require('express');
var router = express.Router();

/* GET Members page. */
router.get('/members', function(req, res, next) {
  res.render('scout_group/members');
});

/* GET Music page. */
router.get('/music', function(req, res, next) {
  res.render('scout_group/music');
});

module.exports = router;