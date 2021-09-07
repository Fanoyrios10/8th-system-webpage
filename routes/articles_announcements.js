var express = require('express');
var router = express.Router();


router.get('/recycling_clothes', function(req, res, next) {
  res.render('articles/announcements/clothes_recycling');
});

router.get('/recycling_phones', function(req, res, next) {
  res.render('articles/announcements/phones_recycling');
});

router.get('/recycling_clothes', function(req, res, next) {
  res.render('articles/announcements/cups_recycling');
});

module.exports = router;
