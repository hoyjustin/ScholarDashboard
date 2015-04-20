var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // if (user.current() != null) {
    res.render('index', { title: 'Scout', filename: 'index' });
  // } else {
    // res.redirect('/dashboard');
  // }
});

router.post('/', function (req, res) {
  var username = req.body['username'];
  var password = req.body['password'];


      res.status(200).send();

    // check service authentication here
    // error: function(error) {
    //   console.log('ERROR: Unable to log in user '+ username);
    //   console.log(error.message);

    //   res.status(400).send('Unable to login user.');
    // }
});


module.exports = router;
