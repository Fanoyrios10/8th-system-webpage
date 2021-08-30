var express = require('express');
var router = express.Router();

/* GET Members page. */
router.get('/members', function(req, res, next) {
  res.render('scout_group/members');
});

module.exports = router;