var mysql2 = require('mysql2');

var connection = mysql2.createConnection({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11512973',
  password: 'Bi2610642610!!!',
  database: 'sql11512973',
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
