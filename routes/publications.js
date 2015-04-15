var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

        res.render('publications', { title: '402Dashboard', banner: 'Countries Publications', filename: 'publications'});
});


module.exports = router;
