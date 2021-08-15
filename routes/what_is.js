var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');

/* GET Scouting page. */
router.get('/scouting', function(req, res, next) {
  res.render('what_is/scouting');
});

/* GET Departments page. */
router.get('/departments', function(req, res, next) {
  res.render('what_is/departments');
});

module.exports = router;