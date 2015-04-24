var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.session.username) {
        res.render('dashboard', { title: '402Dashboard', banner: 'Overview', filename: 'dashboard'});
    }
    else {
		res.redirect('/');
    }
});


module.exports = router;
