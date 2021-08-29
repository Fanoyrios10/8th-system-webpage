var express = require('express');
var router = express.Router();

/* GET Uniform page. */
router.get('/terms_of_use', function(req, res, next) {
  res.render('privacy/terms_of_use');
});

router.get('/personal_data', function(req, res, next) {
  res.render('privacy/personal_data');
});

module.exports = router;
