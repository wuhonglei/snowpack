var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/person/list', function(req, res, next) {
    res.json([{
        name: 'wuhonglei',
        age: 27
    }])
});

module.exports = router;