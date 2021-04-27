var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('changes', {
        title: 'List of price changes'
    });
});

module.exports = router;
