/**
 * Created by Janne on 17.10.2014.
 */
var express = require('express');
var router = express.Router();
var StockManager = require('./../js/stock-manager');

/* GET stocks listing. */
router.get('/', function(req, res) {

    // Get the results from a stockmanager
    var stockManager = new StockManager();
    stockManager.GetHistorical(function (error, result) {
        if (error) {
            res.send(error);
        }

        res.send(result);

    });


});

module.exports = router;
