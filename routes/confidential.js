const src = require('debug');
var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');

/* GET cubs login page. */
router.get('/cubs_login', function (req, res, next) {
  res.render('confidential/cubs_login', {
    img: '',
    alt: ''
  });
});
router.post('/authorization_cub', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    dbconnection.query('SELECT * FROM confidential WHERE branch = ? AND passphrase = ?', [username, password], function (error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect('/confidential/cubs');
      } else {
        response.render('confidential/cubs_login', {
          img: '/images/confidential/tongue_face.gif',
          alt: 'φάτσα με γλώσσα'
        });
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

router.get('/cubs', function(request, response) {
  if (request.session.loggedin) {
    response.render('confidential/cubs_private');
  } else {
    response.redirect('confidential/cubs_login');
  }
  response.end();
});

router.get('/scouts_login', function (req, res, next) {
  res.render('confidential/scouts_login', {
    img: '',
    alt: ''
  });
});
router.post('/authorization_scout', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    dbconnection.query('SELECT * FROM confidential WHERE branch = ? AND passphrase = ?', [username, password], function (error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect('/confidential/scouts');
      } else {
        response.render('confidential/scouts_login', {
          img: '/images/confidential/tongue_face.gif',
          alt: 'φάτσα με γλώσσα'
        });
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

router.get('/scouts', function(request, response) {
  if (request.session.loggedin) {
    response.render('confidential/scouts_private');
  } else {
    response.redirect('confidential/scouts_login');
  }
  response.end();
});

module.exports = router;
