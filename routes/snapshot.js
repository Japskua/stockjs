/**
 * Created by Janne on 17.10.2014.
 */
var express = require('express');
var router = express.Router();
var StockManager = require('./../js/stock-manager');

/* GET snapshot listing. */
router.get('/', function(req, res) {

    // Get the results from a stockmanager
    var stockManager = new StockManager();

    var json = {
        symbol: 'AAPL',
        fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
    };

    stockManager.GetSnapshot(json, function SnapshotCallback(error, result) {
        if (error) {
            res.send(error);
        }

        res.send(result);
    });

});

/* GET snapshot listing by ID. */
router.get('/:id', function(req, res) {

    // Get the results from a stockmanager
    var stockManager = new StockManager();

    var json = {
        symbol: req.params.id,
        fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
    };

    stockManager.GetSnapshot(json, function SnapshotCallback(error, result) {
        if (error) {
            res.send(error);
        }

        res.send(result);
    });

});

/* Example of POST data for testing the API
 {
 "symbol" : "GOOGL",
 "fields" : ["s", "n", "d1", "l1", "y", "r"]
 }
 
 */
/* POST stocks listing */
router.post('/', function(req, res) {

    // Create a new stock manager
    var stockManager = new StockManager();

    // Then, send it for processing
    stockManager.GetSnapshot(req.body, function SnapshotCallback(error, result) {
        if(error) {
            res.send(error);
        }
        // Otherwise
        res.send(result);
    });
});


module.exports = router;
