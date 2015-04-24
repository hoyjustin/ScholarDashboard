var express = require('express');
var router = express.Router();
var request = require('request');
var httpHandler = require('http-handler');

router.get('/', function(req, res, next) {
    if (req.session.username) {
        res.render('heatmap', { title: '402Dashboard', banner:'Publication Locations By Title', filename: 'heatmap' } );
    } else {
        res.redirect('/');
    }
});

// routing to retrieve articles by keyword from Scopus API
router.get('/retrieveArticlesKeyword', function(req, res, next) {
    var keyword = req.query.keyword
    var successCb = function (articles) {
        console.log(articles)
        res.json(articles);
    }
    var errorCb = function (articles, error, response) {
        console.log(error);
        res.status(400).send('ERROR: Cannot retrieve articles');
    }
    httpHandler.retrieveDocumentsByTitleJSON(successCb, errorCb, {'keyword': keyword});
    
});

// routing to retrieve coords of locations from Mapquest API
router.get('/retrieveLocationCoords', function(req, res, next) {
    var locationsQuery = JSON.parse(req.query.locations)
    var locations = {locations: locationsQuery}
    // console.log(locationsQuery)
    var successCb = function (locations) {
        console.log(locations)
        res.json(locations);
    }
    var errorCb = function (locations, error) {
        console.log(error);
        res.status(400).send('ERROR: Cannot retrieve locations');
    }
    httpHandler.retrieveCoordByLocationJSON(successCb, errorCb, {'locations': locations});
});

// routing for testing data
router.get('/getTestHeatmap', function(req, res, next) {

    // Data contains max & min values and an array of point objects (TODO: replace with real data)
    // For now generate some random data
    var max = 0;
    var width = 1281;
    var height = 778; //TODO: Change based on image size

    var minLng = -80;
    var maxLng = 80;
    var minLat = (-97.125/2);
    var maxLat = (97.125/2);

    var arrlen = 10;
    var len = 20;
    var intervals = [];

    // heatmap data format
    var data = { 
    };

    for (var i = 0;i<arrlen;i++) {
        var points = [];
        while (len--) {
          var val = Math.floor(Math.random()*100);
          max = Math.max(max, val);
                    var start = new Date();
          var end = start;
          end.setDate(end.getDate() + 5);
           var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
            var timestamp = {
                __type: 'Date',
                iso: randomDate
            };
          var point = {
            coordX: Math.floor(Math.random()*(maxLng-minLng))+minLng,
            coordY: Math.floor(Math.random()*(maxLat-minLat))+minLat,
            timestamp: timestamp
          };
          points.push(point);
        }
        len = 20;
            console.log(points);
        data[i] = points;
    }
    console.log(data);
    res.json(data);

});

module.exports = router;