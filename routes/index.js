var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
mongoose.connect('mongodb://localhost:27017/dex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pokemon', function(req, res) {
    var db = req.db;
    var collection = db.get('pokemon');
    collection.find( { 'is_default': true }, {'name': 1, 'species.url': 1 }).then((docs) => {
        res.render('pokemon', {
            'pokelist': docs
        });
    });
});

module.exports = router;
