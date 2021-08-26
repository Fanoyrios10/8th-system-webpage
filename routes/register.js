var express = require('express');
var router = express.Router();

/* GET Kids page. */
router.get('/kids', function(req, res, next) {
  res.render('register/kids');
});

/* GET Adults page. */
router.get('/adults', function(req, res, next) {
  res.render('register/adults');
});

module.exports = router;