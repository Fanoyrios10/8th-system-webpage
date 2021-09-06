var express = require('express');
var router = express.Router();


router.get('/2021-2022', function(req, res, next) {
  res.render('articles/calendar/2021-2022');
});


module.exports = router;
