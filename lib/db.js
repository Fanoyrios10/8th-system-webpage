var mysql2 = require('mysql2');

var connection = mysql2.createConnection({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11455763',
  password: 'gfUsdPnAjd',
  database: 'sql11455763',
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
