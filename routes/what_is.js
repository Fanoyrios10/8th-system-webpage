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

/* GET eks page. */
router.get('/eks', function(req, res, next) {
  res.render('what_is/eks');
});

module.exports = router;