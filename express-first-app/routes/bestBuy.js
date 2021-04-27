var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('bestBuy', {
        title: 'List of items that are best to buy right now'
    });
});

module.exports = router;
