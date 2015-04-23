var express = require('express');
var router = express.Router();
var httpHandler = require('http-handler');

router.get('/', function(req, res, next) {

        res.render('publications', { title: '402Dashboard', banner: 'Publications counts by Keyword', filename: 'publications'});
});


// routing to retrieve affiliations from the sciverse database
router.get('/retrieveInstitution', function(req, res, next) {
    var keyword = req.query.keyword
    var successCb = function (articles) {
        console.log(articles)
        res.json(articles);
    }
    var errorCb = function (articles, error) {
        console.log(error);
        res.status(400).send('ERROR: Cannot retrieve articles');
    }
    httpHandler.retrieveInstitutionJSON(successCb, errorCb, {'keyword': keyword});
    
});

module.exports = router;

