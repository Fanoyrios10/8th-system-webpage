var express = require('express');
var router = express.Router();


router.get('/recycling_clothes', function(req, res, next) {
  res.render('articles/announcements/clothes_recycling');
});


module.exports = router;
