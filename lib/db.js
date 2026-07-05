var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: "sql11.freesqldatabase.com",
  user: "sql11832315",
  password: "rnwnUMVIX8",
  database: "sql11832315",
  port: 3306,
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected!");
  }
});

module.exports = connection;
