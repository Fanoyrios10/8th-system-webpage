var mysql2 = require('mysql2');

var connection = mysql2.createConnection({
  host: 'db22.papaki.gr',
  user: 'Fanoyrios',
  password: 'Bi2610642610!!!',
  database: '8th_scout_group_chios',
  port: 3306,
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected!');
  }
});

module.exports = connection;
