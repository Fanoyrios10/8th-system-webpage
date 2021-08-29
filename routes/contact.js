var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/contact')

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    contactAlertNumber: false
  });
});

router.post('/contact_send', function (req, res, next){
  let contact = new Contact(
    req.body.contact_name,
    req.body.contact_email,
    req.body.contact_subject,
    req.body.contact_message
  );
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '8th.scout.group.contact.form@gmail.com',
      pass: 'ProjectValkiery'
    }
  })
  const mailOptions = {
    from: contact.email,
    to: '8th.scout.group.contact.form@gmail.com',
    subject: `Μήνυμα από ${contact.email}: ${contact.subject}`,
    text: contact.message
  }

  transporter.sendMail(mailOptions, (error, info) =>{
    if (error) {
      console.log(error);
      res.render('contact', {
        contactAlertNumber: 1
      });
    }else{
      console.log('Email Sent');
      res.render('contact', {
        contactAlertNumber: 2
      });
    }
  })
})

module.exports = router;
