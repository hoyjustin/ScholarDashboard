var express = require('express');
var router = express.Router();
var httpHandler = require('http-handler');

router.get('/', function(req, res, next) {
  if (!req.session.username) {
    res.render('index', { title: '402Dashboard', filename: 'index' });
  } else {
    res.redirect('/dashboard');
  }
});

router.post('/', function (req, res) {
  var username = req.body['username'];
  var password = req.body['password'];

  var successCb = function() {
    req.session.username = username;
    res.status(200).send();
  }

  var failureCb = function() {
    console.log('ERROR: Unable to login');
    res.status(400).send('Unable to login');
  }

  httpHandler.testAuthentication(successCb, failureCb, {'username': username, 'password': password});

});


module.exports = router;
