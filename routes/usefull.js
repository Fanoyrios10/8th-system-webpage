var express = require('express');
var router = express.Router();

/* GET Uniform page. */
router.get('/uniform', function(req, res, next) {
  res.render('usefull/uniform');
});

module.exports = router;
