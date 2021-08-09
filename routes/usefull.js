var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');

/* GET Uniform page. */
router.get('/uniform', function(req, res, next) {
  res.render('usefull/uniform');
});

module.exports = router;
