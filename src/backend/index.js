var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var AccountModel = require('./src/model/AccountModel');
var TaskModel = require('./src/model/TaskModel');

var AuthController = require('./src/controller/AuthController');
var TaskController = require('./src/controller/TaskController');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*
 * [Auth]
 */
app.post('/auth/sign-in', function(req, res) {
  var controller = new AuthController();

  res.send(JSON.stringify(controller.signIn(req.body.email, req.body.password)));
});

app.post('/auth/sign-up', function(req, res) {
  var controller = new AuthController();

  res.send(JSON.stringify(controller.signUp(req.body.email, req.body.password)));
});

app.post('/auth/sign-out', function(req, res) {
  var controller = new AuthController();

  res.send(JSON.stringify(controller.signOut()));
});

/*
 * [Task]
 */

app.get('/task/get-all', function(req, res) {
  var accountModel = new AccountModel();
  var taskModel = new TaskModel();
  var controller = new TaskController(taskModel);

  res.send(JSON.stringify(controller.getAll()));
});

app.get('/task/get/:id', function(req, res) {
  var accountModel = new AccountModel();
  var taskModel = new TaskModel();
  var controller = new TaskController(taskModel);
  var id = req.param.id;

  res.send(JSON.stringify(controller.getById(id)));
});

app.put('/task/create', function (req, res) {
  // ...
});

app.listen(8080);