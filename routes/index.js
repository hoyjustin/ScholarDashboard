var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('index', { title: '402 Dashboard', filename: 'index' });

});

module.exports = router;
