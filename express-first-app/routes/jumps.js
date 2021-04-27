var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('jumps', {
        title: 'List of Top price jumps'
    });
});

module.exports = router;
