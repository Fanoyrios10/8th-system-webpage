var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;
