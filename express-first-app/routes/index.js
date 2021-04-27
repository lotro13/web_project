var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Welcome to my OldSchoolRunescape Grand Exchange tracker',
        subtitle: 'Made by Andrej Latyš PRIf-18/4',
        titleTop: 'Top selling items',
        titleJumps: 'Top price jumps',
        titleChanges: 'Top price changes',
        titleBuy: 'Buy NOW!!!',
    });
});

module.exports = router;
