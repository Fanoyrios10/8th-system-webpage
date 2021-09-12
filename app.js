var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usefullRouter = require('./routes/usefull');
var confidentialRouter = require('./routes/confidential');
var privacyRouter = require('./routes/privacy')
var articlesScoutGroupsRouter = require('./routes/articles_scout_group')
var articleAnnouncementsRouter = require('./routes/articles_announcements')
var whatIsRouter = require('./routes/what_is')
var registerRouter = require('./routes/register')
var scoutGroupRouter = require('./routes/scout_group')
var contactRouter = require('./routes/contact')
var faqRouter = require('./routes/faq')
var calendarRouter = require('./routes/calendar')
var articlesCubs = require('./routes/articles_cubs')
var articlesScouts = require('./routes/articles_scouts')

var app = express();
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts)
app.use('/', indexRouter);
app.use('/usefull', usefullRouter);
app.use('/users', usersRouter);
app.use('/confidential', confidentialRouter);
app.use('/privacy', privacyRouter);
app.use('/articles/scout_group', articlesScoutGroupsRouter);
app.use('/articles/cubs', articlesCubs);
app.use('/articles/scouts', articlesScouts);
app.use('/articles/announcements', articleAnnouncementsRouter);
app.use('/what-is', whatIsRouter);
app.use('/register', registerRouter)
app.use('/scout-group', scoutGroupRouter)
app.use('/contact', contactRouter)
app.use('/faq', faqRouter)
app.use('/calendar', calendarRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// Set custom layout for single render
// app.get('/', function(req, res) {
//   res.render('the-view', { layout: 'specific-layout' });
// });

// Set no layout for single render
// app.get('/', function(req, res) {
//   res.render('the-view', { layout: false });
// );