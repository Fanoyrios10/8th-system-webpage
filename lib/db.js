var mysql2 = require('mysql2');

var connection = mysql2.createConnection({
  host: 'remotemysql.com',
  user: 'E20Fx9j9Zm',
  password: '0VT9iwfWEr',
  database: 'E20Fx9j9Zm',
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
