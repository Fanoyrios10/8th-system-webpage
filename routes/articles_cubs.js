var express = require('express');
var router = express.Router();


router.get('/opening_day_11-09-2021', function(req, res, next) {
  res.render('articles/cubs/opening_day_11-09-2021');
});


module.exports = router;
