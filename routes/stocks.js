/**
 * Created by Janne on 17.10.2014.
 */
var express = require('express');
var router = express.Router();

/* GET stocks listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;
