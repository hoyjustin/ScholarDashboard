var express = require('express');
var router = express.Router();
var httpHandler = require('http-handler');

router.get('/', function(req, res, next) {
	if (req.session.username) {
        res.render('publications', { title: '402Dashboard', banner: 'Publication Counts By Location', filename: 'publications'});
    }
    else {
		res.redirect('/');
    }
});


// routing to retrieve affiliations from the sciverse database
router.get('/retrieveInstitution', function(req, res, next) {
    var keyword = req.query.keyword
    var successCb = function (articles) {
        console.log(articles)
        res.json(articles);
    }
    var errorCb = function (articles, error, response) {
        console.log(error);
        res.status(400).send('ERROR: Cannot retrieve articles');
    }
    httpHandler.retrieveInstitutionJSON(successCb, errorCb, {'keyword': keyword});
    
});

module.exports = router;

