var express = require("express");
var app = express();

const bodyParser = require("body-parser");
const mysql = require("mysql");

const cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_test"
});

app.post("/signup", function(req, res) {
  const addtouser = req.body;
  var records = [[addtouser.email, addtouser.password, addtouser.name]];
  connection.query(
    "INSERT INTO users(email, password,name) VALUES  ?",
    [records],
    function(error, results, next) {
      if (error) {
        res.send({
          status: 400,
          message: "Email already exists"
        });
      } else {
        res.send({
          status: 200,
          message: "successfully registered"
        });
      }
    }
  );
});

app.post("/loginVerify", function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  connection.query(
    "SELECT password from users WHERE email = ?",
    [email],
    function(error, results, next) {
      if (results.length !== 0) {
        const actualPassword = results[0].password;
        if (password === actualPassword) {
          let token;
          connection.query(
            "select token from users where email = ?",
            [email],
            function(error, results, next) {
              token = results;
            }
          );
          if (token === undefined) {
            token = new Date().getTime() + 557000;
            connection.query(
              "update users set token = ? where email = ?",
              [token, email],
              function(error, results, next) {}
            );
          } else if (token < new Date().getTime()) {
            res.send({
              status: 401,
              message: "Session expired"
            });
          }
          res.send({
            status: 200,
            message: "Login successfully",
            email: email,
            token: token
          });
        } else {
          res.send({
            status: 400,
            message: "Incorrect Password entered"
          });
        }
      } else {
        res.send({
          status: 400,
          message: "Incorrect Details"
        });
      }
    }
  );
});

app.post("/logout", function(req, res) {
  const email = req.body.email;
  connection.query(
    "SELECT email from users WHERE email = ? ",
    [email],
    function(error, results, next) {
      if (results.length !== 0) {
        const email = results[0].email;
        if (email !== undefined) {
          connection.query(
            "update users set token = ? where email = ?",
            [null, email],
            function(error, results, next) {
              if (error) {
                res.send({
                  status: 400,
                  message: "Incorrect Details"
                });
              } else {
                res.send({
                  status: 200,
                  message: "Logged out successfully"
                });
              }
            }
          );
        }
      }
    }
  );
});

app.get("/cardvalues", function(req, res) {
  connection.query("select * from itemslider1", function(error, results, next) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log("Go to http://localhost:3000/posts to see posts");
});
