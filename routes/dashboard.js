var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

        res.render('dashboard', { title: '402Dashboard', banner: 'Overview', filename: 'dashboard'});
});


module.exports = router;
